import { ExpressError } from "../error/expressError.js";
import jwt from "jsonwebtoken";
// import UserModel from "../models/UserModel.js";

export const userAuth = async (req, res, next) => {
  //obtain the created cookies during login (created in the login API)
  const { userCookies } = req.cookies;
  if (!userCookies) {
    throw new ExpressError("User is not logged in", 400);
  }
  try {
    //verify jwt tokens to obtain the data of logged user.
    //data of req.user contains the data specified when logging in.
    //use the created cookie (userCookies) that contains the token
    req.user = jwt.verify(userCookies, process.env.JWT_SECRET);
    // console.log(req.user);
    next();
  } catch (err) {
    console.log(err);
    throw new ExpressError(err, 400);
  }
};

export const isAdmin = async (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new ExpressError("User is not an admin");
    }
    next();
  };
};
