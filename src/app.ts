import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import BookRoutes from "./app/modules/book/book.route";
import { globalErrorHandler } from "./app/middleware/errorHandler";
import BorrowRoutes from "./app/modules/borrow/borrow.route";


const app: Application = express();

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin || "*");
    },
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the Book Borrowing API",
  });
});


app.use("/api/books", BookRoutes);
app.use("/api/borrow", BorrowRoutes);


app.use((req: Request, res: Response, next: NextFunction) => {

  res.status(404).json({

    success: false,
    message: "API endpoint not found",
  });
  next();
});

app.use(globalErrorHandler);

export default app;
