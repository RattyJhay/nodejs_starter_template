// src/index.ts
import app from "./app.js";
import { config } from "dotenv";

// Load environment variables at startup
config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(
        `🚀 Server running in ${NODE_ENV} mode on http://localhost:${PORT}`
      );
      console.log("Press CTRL-C to stop\n");
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit with failure code
  }
};

// Global handler for unhandled promise rejections
// This prevents the app from crashing silently if an unhandled promise rejection occurs
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
  process.exit(1);
});

startServer();
