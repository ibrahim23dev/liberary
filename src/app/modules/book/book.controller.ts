import { Request, Response, NextFunction } from "express";
import { BookService } from "../book/book.service";
import { sendResponse } from "../../utils/sendResponse";


export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookData = req.body;
    const createdBook = await BookService.createBook(bookData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Book created successfully",
      data: createdBook,
    });
  } catch (err) {
    next(err);
  }
};


export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryOptions = req.query;
    const books = await BookService.getBooks(queryOptions);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Books fetched successfully",
      data: books,
    });
  } catch (err) {
    next(err);
  }
};


export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const book = await BookService.getBookById(bookId);

    if (!book) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: `Book with ID ${bookId} not found`,
        data: null,
      });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (err) {
    next(err);
  }
};


export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const updatedData = req.body;
    const updatedBook = await BookService.updateBook(bookId, updatedData);

    if (!updatedBook) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: `Book with ID ${bookId} not found`,
        data: null,
      });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (err) {
    next(err);
  }
};


export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const deletedBook = await BookService.deleteBook(bookId);

    if (!deletedBook) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: `Book with ID ${bookId} not found`,
        data: null,
      });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
