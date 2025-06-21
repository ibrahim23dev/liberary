import { model, Schema } from "mongoose";
import { IBookDocument } from "./book.interface";

const bookSchema = new Schema<IBookDocument>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
        message:
          "Genre must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY",
      },
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: true,
    },
    description: { type: String },
    copies: [
      {
        type: Number,
        required: [true, "Number of copies is required"],
        min: [0, "Copies must be a positive number"],
      },
    ],
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

bookSchema.methods.updateAvailability = function () {
 
  this.available = this.copies > 0;
  return this.save();
};

export const Book = model<IBookDocument>("Book", bookSchema);
