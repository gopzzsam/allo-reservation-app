# Inventory Reservation System

## Tech Stack

- Next.js
- Prisma
- SQLite
- TypeScript
- Vercel

---

## Features

- Product reservation system
- Inventory stock management
- Concurrency-safe reservations
- Prisma transaction handling
- Reservation expiry logic
- Prevent overselling

---

## Run Locally

Install dependencies:

```bash
npm install
```

Generate Prisma client:

```bash
npx prisma generate
```

Push database schema:

```bash
npx prisma db push
```

Run development server:

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
```

---

## Concurrency Handling

This project uses Prisma transactions and atomic stock decrement operations to prevent overselling during simultaneous reservations.

---

## Reservation Expiry

Reservations expire after 10 minutes and inventory is released back automatically.

---

## Tradeoffs

- SQLite used for simplicity
- Redis locking not implemented
- Background cleanup jobs not added

---

## Deployment

Live Demo:
https://allo-reservation-app.vercel.app/

GitHub Repository:
https://github.com/gopzzsam/allo-reservation-app