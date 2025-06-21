// src/modules/book/book.route.ts
import express from "express";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "./book.controller";

const router = express.Router();
const BookRoutes = router;

router.post("/", createBook);
router.get("/", getBooks);
router.get("/:bookId", getBookById);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

export default BookRoutes;
