# ⚙️ Food Station - Backend API Boilerplate

[![Express](https://img.shields.io/badge/Express.js-5.0-blue?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.5-black?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Stripe](https://img.shields.io/badge/Stripe-20.4-606770?style=for-the-badge&logo=stripe)](https://stripe.com/)

A powerful and scalable backend engine for **Food Station**, providing robust API endpoints for order management, meal tracking, and authentication handling. Built on **Express 5** and **TypeScript**, it uses **Prisma ORM** with **PostgreSQL** for high-performance data storage and retrieval.

---

## 🚀 Live API
- **Backend API URL**: [food-station-backend.vercel.app](https://food-station-backend.vercel.app)
- **Frontend Live URL**: [food-station-bd.vercel.app](https://food-station-bd.vercel.app)

---

## ✨ Features
- **RESTful API Architecture**: Clean and structured endpoints for frontend integration.
- **Type-Safe Data Flow**: Powered by TypeScript and Prisma for end-to-end type safety.
- **Prisma & PostgreSQL**: Robust database schema management and migration system.
- **Better Auth Implementation**: Seamless authentication and authorization with role-based access control (Admin, Provider, Customer).
- **Stripe Integration**: Secure backend logic for payment processing and verification.
- **Optimized Performance**: Efficient database querying and ESM support.
- **Auto-deployment Ready**: Pre-configured for seamless deployment to platforms like Vercel.

---

## 🛠️ Tech Stack
- **Server**: [Express JS 5](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **Payment Gateway**: [Stripe](https://stripe.com/)
- **Runtime**: [tsx](https://github.com/privatenumber/tsx) (Modern TypeScript execution)
- **Tooling**: [Dotenv](https://github.com/motdotla/dotenv), [CORS](https://github.com/expressjs/cors)

---

## 📦 Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- PostgreSQL Database instance

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/stackbymazed/Food_station_backend.git
   cd Food_station_backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   DATABASE_URL="your-postgresql-url"
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   BETTER_AUTH_SECRET="your-auth-secret"
   FRONTEND_URL="http://localhost:3000"
   # Add other necessary keys here
   ```

4. **Initialize Prisma (Database Sync)**
   Sync your Prisma schema with your database:
   ```bash
   npx prisma db push
   ```

5. **Seed Initial Data (Admin Account)**
   Create the default admin credentials:
   ```bash
   npm run seed:admin
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```
   The API will be available at [http://localhost:5000](http://localhost:5000).

---

## 🔐 Test Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@gmail.com` | `admin1234` |
| **Provider** | `provider@gmail.com` | `Provider123` |

---

## 📂 Project Structure
```bash
src/
├── api/          # Route handlers & API Controllers
├── scripts/      # Database seeding & management scripts
├── prisma/       # Database Schema (schema.prisma)
├── server.ts     # Main API entry point
└── types/        # Custom TypeScript interface & Types
```

---

## 🤝 Contributing
Contributions are always welcome! Feel free to open issues or submit pull requests for any features or bug fixes.

---

## 📄 License
Distributed under the ISC License.

---

## 📩 Contact
**Mazed** - [GitHub Profile](https://github.com/stackbymazed)

**Repo Link**: [https://github.com/stackbymazed/Food_station_backend](https://github.com/stackbymazed/Food_station_backend)
