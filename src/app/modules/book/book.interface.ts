import { Genre } from "./book.types";

export interface IBookMethods {
  updateAvailability(): Promise<IBookDocument>;
}

export type IBookBase = {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
};

export type IBookDocument = IBookBase & Document & IBookMethods;