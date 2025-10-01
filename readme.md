# 📚 Library Management System API

A robust, type-safe, and modular REST API built using Express, TypeScript, and MongoDB via Mongoose. This project allows users to manage a collection of books and borrowing operations within a library.

[![Library Management API](https://img.shields.io/badge/API-View%20Library%20Management-blue?style=for-the-badge&logo=vercel)](https://library-management-server-mocha.vercel.app/)

[![Video ReadMe](https://img.shields.io/badge/📽️%20Watch%20Video%20ReadMe-blue?style=for-the-badge)](https://drive.google.com/drive/folders/1weiJuFP9FC-QJP01EEKtV6S7NlzIrCSY?usp=sharing)


**🚀 Features**

- 📖 CRUD operations for books

- 🔄 Borrowing logic with availability tracking

- 📊 Aggregated borrow summaries

- ✅ Zod-powered request validation

- 🧠 Mongoose middleware, static & instance methods

- 🔐 Centralized error handling

- 🧱 Modular and scalable codebase

# 📁 Project Structure

```bash
src/
├── app/
│   ├── routes/                 # Home routes
│   │   └── index.ts
│   ├── modules/
│   │   ├── book/
│   │   │   ├── book.controller.ts
│   │   │   ├── book.model.ts
│   │   │   ├── book.route.ts
│   │   │   ├── book.service.ts
│   │   │   └── book.interface.ts
│   │   └── borrow/
│   │       ├── borrow.controller.ts
│   │       ├── borrow.model.ts
│   │       ├── borrow.route.ts
│   │       ├── borrow.service.ts
│   │       └── borrow.interface.ts
│   ├── middlewares/
│   │   └── errorHandler.ts
│   ├── utils/
│   │   ├── sendResponse.ts
│   │   └── sendResponse.interface.ts
│   └── config/
│       └── db.ts               # MongoDB connection
├── app.ts                      # Express app configuration
├── server.ts                   # Application entry point
└── .env                        # Environment variables
├── .gitignore
├── eslint.config.mjs         # ESLint Flat Config (using @eslint/js +typescript-eslint)
├── package.json
├── package-lock.json
├── readme.md
├── tsconfig.json

```


**🧪 Technologies Used**

- Node.js, Express

- TypeScript

- MongoDB + Mongoose

- Zod for input validation

- ESLint, Prettier for code quality

# 📌 API Endpoints

**🔰 Base URL**

```bash
http://localhost:5000/api
```


**🌐 Home Route**
`GET /`

Returns a welcome message and available API routes.

**📚 Book Routes**
`POST /api/books`
Create a new book.

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
```

`GET /api/books`
Get all books. Supports filtering and sorting.

**- **

- filter: Genre filter (FICTION, SCIENCE, etc.)

- sortBy: Sort key (e.g., createdAt)

- sort: asc or desc

- limit: Number of results

`GET /api/books/:bookId`
Get a book by ID.

`PUT /api/books/:bookId`
Update book details. Accepts partial fields.

```json
{
  "copies": 10
}
```

`DELETE /api/books/:bookId`
Deletes a book.

**🔄 Borrow Routes**
`POST /api/borrow`
Borrow a book.

```json
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

# Business Logic:

- Copies must be available.

- Book availability is automatically updated.

- Mongoose instance method ensures available = false if copies drop to 0.

`GET /api/borrow`
Returns an aggregated summary:

```json
[
  {
    "book": {
      "title": "The Theory of Everything",
      "isbn": "9780553380163"
    },
    "totalQuantity": 5
  }
]
```

## 🧪 Validation Rules (Zod)

**Book:**

- title, author, isbn, genre, and copies are required.

- genre must be one of the allowed enums.

**Borrow:**

- book, quantity, and dueDate are required.

- quantity must be positive.

# 🧠 Key Architecture & Concepts

- ✅ Zod Validation Layer: Enforces shape of requests

- 🧩 Service Layer: Business logic is decoupled from controllers

- 🔄 Mongoose Instance Method: book.updateAvailability() updates availability status dynamically

- 📊 Aggregation Pipeline: Used in /api/borrow to compute total borrow count per book

- 🔥 Error Handler: Catches and formats all application errors

# 🛠️ Setup Instructions

```bash


# Clone the repo

git clone https://github.com/yourname/library-management-api.git

# Install dependencies

cd library-management-api
npm install

# Create a .env file and add your MongoDB URI

echo "MONGODB_URI=mongodb://localhost:27017/library" > .env

# Start the server

npm run dev ok akdom perfect hoysa
```



```bash


# Clone  this repo

git clone https://github.com/yourname/library-management-api.git

# Install dependencies

cd library-management-api
npm install

# Create a .env file and add your MongoDB URI

echo "MONGODB_URI=mongodb://localhost:27017/library" > .env

# Start the server

npm run dev ok akdom perfect hoysa
```
