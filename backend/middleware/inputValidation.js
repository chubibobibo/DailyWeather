//import express-validator
import { body, param, validationResult } from "express-validator";

import { ExpressError } from "../error/expressError.js";
import { UserModel } from "../models/UserModel.js";
import mongoose from "mongoose";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req); //this returns all available errors based on the validation provided when checking the incoming request.
      //check if the errors array is not empty meaning there errors.
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((allErrors) => allErrors.msg); //turns the errors from the validationResult into array then mapped it to access the msg key for every item in the original array, then populate the created array with that.
        throw new ExpressError(errorMessages); //use the custom error that we created and pass the errorMessages that we mapped instead of a string.
      }
      next();
    },
  ];
};

//INPUT VALIDATIONS
//Import in the routes that needs it
export const registerValidation = withValidationErrors([
  //name validation
  body("name")
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ max: 25 })
    .withMessage("Characters should not exceed 25"),
  //lastName vaildation
  body("lastName")
    .notEmpty()
    .withMessage("Last name should not be empty")
    .isLength({ max: 25 })
    .withMessage("Characters should not exceed 25"),
  //email validation
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Should be a valid email address")
    .custom(async (email) => {
      const foundEmail = await UserModel.findOne({ email: email });
      if (foundEmail) {
        throw new ExpressError("Email already exist", 400);
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password should be atleast 8 characters"),
]);

export const loginValidation = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Should be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters"),
]);

export const updateProfileValidation = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ max: 25 })
    .withMessage("Characters should not exceed 25"),
  //lastName vaildation
  body("lastName")
    .notEmpty()
    .withMessage("Last name should not be empty")
    .isLength({ max: 25 })
    .withMessage("Characters should not exceed 25"),
  //email validation
  body("email")
    .isEmail()
    .withMessage("Email should be a valid email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .custom(async (email, { req }) => {
      const foundUser = await UserModel.findOne({ email: email });
      //protect updating of user profile if not logged in
      if (foundUser && foundUser._id.toString() !== req.user.userId) {
        throw new ExpressError(
          "User needs to be logged in to update profile",
          400
        );
      }
    }),
]);

export const paramValidate = withValidationErrors([
  param("id").custom(async (id) => {
    const validId = mongoose.Types.ObjectId.isValid(id); //returns a boolean
    if (!validId) {
      throw new ExpressError("Not a valid Id", 400);
    }
  }),
]);
