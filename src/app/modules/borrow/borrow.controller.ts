// src/modules/borrow/borrow.controller.ts
import { Request, Response, NextFunction } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { BorrowService } from "./borrow.service";
// import { createBorrowZodSchema } from "./borrow.validation";

export const borrowBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const parsed = createBorrowZodSchema.parse(req.body);
    const parsed = req.body;
    const borrowed = await BorrowService.borrowBook(
      parsed.book,
      parsed.quantity,
      parsed.dueDate
    );

    sendResponse(res, {
      success: true,
      message: "Book borrowed successfully",
      data: borrowed,
    });
  } catch (error) {
    next(error);
  }
};

export const getBorrowSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const summary = await BorrowService.getBorrowSummary();
    sendResponse(res, {
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary.data,
    });
  } catch (error) {
    next(error);
  }
};
