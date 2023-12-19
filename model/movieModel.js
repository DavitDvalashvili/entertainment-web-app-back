import mongoose from "mongoose";
import dotenv from "dotenv";
//import * as logger from "./utils/logger.js";

// config dotenv
dotenv.config();

const thumbnailSchema = new mongoose.Schema({
  small: String,
  medium: String,
  large: String,
  id: String,
});

export const movieSchema = new mongoose.Schema({
  thumbnail: {
    trending: thumbnailSchema,
    regular: thumbnailSchema,
  },
  title: String,
  year: Number,
  category: String,
  rating: String,
  isTrending: Boolean,
  isBookmarked: Boolean,
  id: String,
});

movieSchema.set("toJSON", {
  transform: (Document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

const moviesModel = mongoose.model("movies", movieSchema);

export default moviesModel;
