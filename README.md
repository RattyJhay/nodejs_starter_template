# Node.js TypeScript Starter Template

A minimal but powerful starter template for building Node.js applications with TypeScript. This template includes Express.js setup with essential middleware for security and API functionality.

## Features

- 🚀 **TypeScript** support
- ⚡️ **Express.js** for fast server setup
- 🔒 **Helmet** for enhanced security
- 🌐 **CORS** enabled with configurable origin
- 🍪 **Cookie Parser** middleware
- 📝 **dotenv** for environment variable management
- 🔄 **Hot reload** development server
- 💪 **Health Check Endpoint** for monitoring
- 🛡️ **Error Handling** middleware
- 📊 **Request Parsing** for JSON and URL-encoded bodies

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 16.x or higher recommended)
- pnpm, npm, or yarn package manager
- nodemon (global installation required)

```bash
# Install nodemon globally using your preferred package manager
npm install -g nodemon
# or
yarn global add nodemon
# or
pnpm add -g nodemon
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RattyJhay/nodejs_starter_template_pro.git
cd node_ts_starter_template
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

## Scripts

- `pnpm start` - Start the development server with hot reload
- `pnpm build` - Build the TypeScript code
- `pnpm test` - Run tests (currently placeholder)

## Project Structure

```
├── src/
│   ├── index.ts        # Application entry point
│   ├── app.ts          # Express application setup
│   ├── routes/         # API routes
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   └── config/         # Configuration files
├── dist/               # Compiled JavaScript files
├── .env               # Environment variables
├── .gitignore
├── tsconfig.json      # TypeScript configuration
└── package.json
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## Health Check Endpoint

The template includes a health check endpoint at `/health` that returns important system metrics:

```bash
GET /health
```

Response example:

```json
{
  "status": "success",
  "uptime": 1234.5678,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "memory": {
    "heapTotal": 123456789,
    "heapUsed": 987654321,
    "rss": 123456789,
    "external": 987654321
  }
}
```

### Health Check Metrics Explained:

- `uptime`: Number of seconds the server has been running
- `timestamp`: Current server time in ISO format
- `memory`: Object containing memory usage statistics
  - `heapTotal`: Total size of the allocated heap
  - `heapUsed`: Actual memory used during execution
  - `rss`: Resident Set Size, total memory allocated
  - `external`: Memory used by C++ objects bound to JavaScript objects

This endpoint is useful for:

- Monitoring service health
- Container orchestration (e.g., Kubernetes liveness probes)
- Load balancer checks
- Uptime monitoring

## Error Handling

The template includes built-in error handling:

- Global error handler for uncaught exceptions
- 404 handler for undefined routes
- Environment-aware error messages (detailed in development, generic in production)

## Security Features

- Helmet.js for secure HTTP headers
- CORS protection with configurable origin
- Environment-based error responses
- Secure cookie parsing

## Development

To start the development server:

```bash
pnpm start
```

The server will restart automatically when file changes are detected.

## Building for Production

To build the project:

```bash
pnpm build
```

This will create a `dist` directory with the compiled JavaScript files.

## Dependencies

### Production

- express: Web framework for Node.js
- cookie-parser: Parse Cookie header and populate req.cookies
- cors: Enable Cross-Origin Resource Sharing
- dotenv: Load environment variables from .env file
- helmet: Security middleware

### Development

- typescript: TypeScript language
- ts-node: TypeScript execution engine
- tsx: Enhanced TypeScript execution
- @types/\*: TypeScript type definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.
