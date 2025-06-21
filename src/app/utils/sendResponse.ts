import { Response } from "express";
import { IApiResponse } from "./sendResponse.interface";

export const sendResponse = <T>(res: Response, payload: IApiResponse<T>) => {
 res.status(200).json(payload);
};
