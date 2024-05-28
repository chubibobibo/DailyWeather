import mongoose from "mongoose";
import { LocationsModel } from "./LocationsModel.js";

import { roles } from "../utils/rolesObject.js";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(roles), //method to obtain values of objects. returns an array
  },
  savedLocations: {
    type: Schema.Types.ObjectId,
    ref: "LocationsModel",
  },
});

export const UserModel = mongoose.model("UserModel", UserSchema);
