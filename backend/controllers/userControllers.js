import "express-async-errors";

// express error handler
import { ExpressError } from "../error/expressError.js";
//import UserModel
import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER API
export const register = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }

  //create admin role based on first entry in DB
  const admin = (await UserModel.countDocuments()) === 0;
  req.body.role = admin ? "admin" : "user";

  //hashing password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hashedPassword;

  //register a user with role
  const newUser = await UserModel.create(req.body);
  console.log(newUser);
  if (!newUser) {
    throw new ExpressError("Something went wrong registering a user", 400);
  }
  res.status(200).json({ message: `User ${newUser.name} created`, newUser });
};

//LOGIN API
export const login = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }
  const foundUser = await UserModel.findOne({ email: req.body.email });
  // console.log(foundUser);
  if (!foundUser) {
    throw new ExpressError("Email or password in incorrect");
  }
  //login logic using bcrypt.compareSync
  const verifiedUser = bcrypt.compareSync(
    req.body.password,
    foundUser.password
  );
  if (!verifiedUser) {
    throw new ExpressError("Email or password is incorrect!");
  }

  //implement JWT
  const token = jwt.sign(
    {
      userId: foundUser._id,
      userRole: foundUser.role,
      userName: foundUser.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  //implement cookies
  res.cookie("userCookies", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    secure: process.env.NODE_ENV === "production", // 1 week expiration
  });
  res.status(200).json({ message: `Welcome ${foundUser.name}`, foundUser });
};

export const logout = async (req, res) => {
  res.cookie("userCookies", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ message: "User is logged out" });
};
