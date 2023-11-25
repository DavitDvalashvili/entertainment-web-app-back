import mongoose from "mongoose";
import dotenv from "dotenv";
import * as logger from "./utils/logger.js";
dotenv.config();

const URL = process.env.URL || "mongodb://localhost:27017/MoviesDb";

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

const moviesModel = mongoose.model("MoviesCollection", movieSchema);

mongoose
  .connect(URL)
  .then(() => {
    logger.info("Connected mongoDb");
    //moviesModel.insertMany(allMovies);
    //logger.info(result);
    return moviesModel.find({});
  })
  .then(() => {
    logger.info("Movies found");
    //logger.info(result);
    //return mongoose.connection.close();
  })
  .catch((error) => {
    logger.error(`Have not connected ${error}`);
  });

export default moviesModel;
