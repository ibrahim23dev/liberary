import { z } from "zod";

export const genreEnum = z.enum([
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
]);

export const createBookZodSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  author: z.string({ required_error: "Author is required" }),
  genre: genreEnum,
  isbn: z.string({ required_error: "ISBN is required" }),
  description: z.string().optional(),
  copies: z.number({ required_error: "Copies is required" }).int().min(0),
  available: z.boolean(),
});

export const updateBookZodSchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  genre: genreEnum.optional(),
  isbn: z.string().optional(),
  description: z.string().optional(),
  copies: z.number().int().min(0).optional(),
  available: z.boolean().optional(),
});
