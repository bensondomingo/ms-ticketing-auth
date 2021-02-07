import express, { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import RequestValidationError from "../errors/request-validation-error";
import DatabaseConnectionError from "../errors/database-connection-error";

const router = express.Router();
const validators = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 characters"),
];

router.post(
  "/signup",
  validators,
  (req: Request, res: Response, next: NextFunction) => {
    // Validation stuff
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;
    console.log("Creating a user ...");
    throw new DatabaseConnectionError();
    res.send({ status: "OK" });
  }
);

export default router;
