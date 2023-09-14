import * as zod from "zod";
import { Request, Response, NextFunction } from "express";

const validateSchema = zod.object({
  name: zod
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, {
      message: "Name must be at least 2 characters",
    }),
  email: zod
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email address",
    }),
});

function validateBody(body: any) {
  const result = validateSchema.safeParse(body);
  if (!result.success) {
    return {
      error: result.error.issues[0].message,
      isValid: false,
    };
  }
  return {
    isValid: true,
  };
}

export function validateBodyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error, isValid } = validateBody(req.body);
  if (!isValid) {
    return res.status(400).json({
      error: error,
    });
  }
  next();
}
