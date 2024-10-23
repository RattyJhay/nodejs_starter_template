# Node.js TypeScript Starter Template Pro

A production-ready, feature-rich template for building scalable Node.js applications with TypeScript. Built with modern best practices, security, and monitoring in mind.

## ✨ Features

- **Core**

  - 🚀 TypeScript 5.x
  - ⚡️ Express.js with modern setup
  - 🔄 Hot reload development
  - 📝 Environment management

- **Security & Monitoring**

  - 🔒 Helmet.js security headers
  - 🌐 Configurable CORS
  - 💪 Health check endpoint
  - 🛡️ Production-ready error handling

- **Developer Experience**
  - 🔥 Hot reload with tsx
  - 📊 Request parsing (JSON, URL-encoded)
  - 🍪 Cookie handling
  - 🎯 TypeScript types included

## 🚀 Quick Start

### Prerequisites

- Node.js (16.x or higher)
- pnpm (or npm/yarn)
- nodemon (global)

```bash
pnpm add -g nodemon
```

### Setup

1. Clone and install:

```bash
git clone https://github.com/RattyJhay/nodejs_ts_starter_template_pro.git
cd nodejs_ts_starter_template_pro
pnpm install
```

2. Set up environment:

```bash
cp .env.example .env
```

3. Start development:

```bash
pnpm start
```

## 📁 Project Structure

```
src/
├── index.ts        # Server entry
├── app.ts          # Express setup
├── routes/         # API routes
├── controllers/    # Route handlers
├── middleware/     # Custom middleware
└── config/         # Configurations
```

## ⚙️ Configuration

`.env` file setup:

```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## 🛠️ Scripts

- `pnpm start` - Development with hot reload
- `pnpm build` - Production build
- `pnpm test` - Run tests

## 🏥 Health Monitoring

Built-in health endpoint at `/health` providing:

- System uptime
- Memory usage
- Server timestamp
- Resource metrics

Perfect for:

- Kubernetes probes
- Load balancer checks
- Uptime monitoring

## 🔒 Security Features

- Helmet.js HTTP security headers
- CORS with configurable origins
- Environment-based error responses
- Secure cookie handling
- Production error sanitization

## 🚀 Development

Start the dev server:

```bash
pnpm start
```

Build for production:

```bash
pnpm build
```

## 📦 Dependencies

**Production:**

- `express` - Web framework
- `helmet` - Security headers
- `cors` - CORS handling
- `cookie-parser` - Cookie handling
- `dotenv` - Environment management

**Development:**

- `typescript` - Type support
- `tsx` - TypeScript execution
- `ts-node` - TypeScript runtime
- `@types/*` - Type definitions

## 🤝 Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📄 License

ISC

---

Built with 💙 by Ratty Jhay
