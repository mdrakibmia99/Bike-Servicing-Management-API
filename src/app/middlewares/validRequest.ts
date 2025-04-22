import { AnyZodObject } from "zod";
import { catchAsync } from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";

export const validRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // const body = await schema.parseAsync(req.body);
    // req.body = body;
    // console.log("Valid request body", req.body,body);
    // next();
    try {
      const parsedData = await schema.parseAsync({
        body: req.body,
      });
      req.body = parsedData.body;
      // console.log("Parsed data: ", parsedData.body);
      return next();
    } catch (err) {
      next(err);
    }
  });
};
