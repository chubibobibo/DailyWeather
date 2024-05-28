import { ExpressError } from "../error/expressError.js";
import { UserModel } from "../models/UserModel.js";

//obtain loggedUser
export const loggedUser = async (req, res) => {
  const foundUser = await UserModel.findById(req.user.userId);
  if (!foundUser) {
    throw new ExpressError("User must be logged in");
  }
  res.status(200).json({ message: "logged user", foundUser });
};

//updateProfile
export const updateProfile = async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }
  //password is not modified through updateProfile
  delete req.body.password;
  const updatedProfile = await UserModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedProfile) {
    throw new ExpressError("No profile found", 400);
  }
  res.status(200).json({ message: "User profile updated", updatedProfile });
};
