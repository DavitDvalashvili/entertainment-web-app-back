import mongoose from "mongoose";
import dotenv from "dotenv";

// config dotenv
dotenv.config();

const thumbnailSchema = new mongoose.Schema({
  small: String,
  medium: String,
  large: String,
  id: String,
});

// Define schema for movies
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

// Define toJSON method to customize JSON output
movieSchema.set("toJSON", {
  transform: (Document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

const moviesModel = mongoose.model("movies", movieSchema);

export default moviesModel;
