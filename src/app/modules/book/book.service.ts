// src/modules/book/book.service.ts
import { IBookBase, IBookDocument } from "./book.interface";
import { Book } from "./book.model";
import { FilterQuery } from "mongoose";
import { IBookQuery } from "./book.types";

export const createBook = async (payload: IBookBase) => {
  const book = new Book(payload);
  return book.save();
};

export const getBooks = async (query: IBookQuery) => {
  const filter: FilterQuery<IBookDocument> = {};
  if (query.filter) filter.genre = query.filter;

  const sortBy = query.sortBy || "createdAt";
  const sortOrder = query.sort === "asc" ? 1 : -1;
  const limit = Number(query.limit) || 10;

  return Book.find(filter)
    .sort({ [sortBy]: sortOrder })
    .limit(limit);
};

export const getBookById = async (bookId: string) => {
  return Book.findById(bookId);
};

export const updateBook = async (
  bookId: string,
  payload: Partial<IBookBase>
) => {
  const book = await Book.findByIdAndUpdate(bookId, payload, { new: true });
  if (book && typeof book.updateAvailability === "function") {
    await book.updateAvailability();
  }
  return book;
};

export const deleteBook = async (bookId: string) => {
  return Book.findByIdAndDelete(bookId);
};


export const BookService = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};