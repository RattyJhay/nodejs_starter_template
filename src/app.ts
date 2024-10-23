// src/app.ts
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// CORS configuration with support for credentials and custom origin
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  credentials: true, // Allow credentials (cookies, authorization headers)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// Security middleware to set various HTTP headers
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser());
app.use(cors(corsOptions));

// Global error handling middleware
// Catches all errors thrown in routes/middleware and sends structured response
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    // Only send detailed error messages in development
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

// Health check endpoint for monitoring
// Returns uptime and timestamp for service monitoring
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    uptime: process.uptime(), // Server uptime in seconds
    timestamp: new Date().toISOString(),
    memory: process.memoryUsage(), // Added memory usage stats
  });
});

// Welcome route
app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "success",
    message: "Welcome to the API! 🚀",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// 404 handler for undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

export default app;
