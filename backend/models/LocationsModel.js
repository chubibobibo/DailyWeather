import mongoose from "mongoose";

const { Schema } = mongoose;

const LocationsSchema = new Schema({
  locationName: {
    type: String,
    // required: true,
  },
});

export const LocationsModel = mongoose.model("LocationsModel", LocationsSchema);
