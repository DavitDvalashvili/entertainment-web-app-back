import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import moviesModel from "./mongo.js";
import dotenv from "dotenv";
import * as logger from "./utils/logger.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
const URL = process.env.URL || "mongodb://localhost:27017/MoviesDb";
mongoose.connect(URL);

app.get("/", async (req, res) => {
  const movies = await moviesModel.find({});
  res.send(movies);
});

app.get("/movies", async (req, res) => {
  try {
    const movies = await moviesModel.find({ category: "Movie" });
    res.send(movies);
  } catch (error) {
    logger.error(error);
    res.status(404).json({ error: "404 not found" });
  }
});

app.get("/tvSeries", async (req, res) => {
  try {
    const series = await moviesModel.find({ category: "TV Series" });
    res.send(series);
  } catch (error) {
    logger.error(error);
    res.status(404).json({ error: "404 not found" });
  }
});

app.get("/bookmarks", async (req, res) => {
  try {
    const bookmarks = await moviesModel.find({ isBookmarked: true });
    res.send(bookmarks);
  } catch (error) {
    logger.error(error);
    res.status(404).json({ error: "404 not found" });
  }
});

const pages = ["movies", "tvSeries", "bookmarks"];

pages.map((page) => {
  app.put(`/${page}/:movieID`, async (req, res) => {
    try {
      const movieID = req.params.movieID;
      const existingMovie = await moviesModel.findById(movieID);

      if (!existingMovie) {
        return res.status(404).json({ error: "Movie not found" });
      }

      // Toggle the isBookmarked field
      existingMovie.isBookmarked = !existingMovie.isBookmarked;

      // Save the updated document
      const updatedMovie = await existingMovie.save();

      res.json(updatedMovie);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

app.listen(PORT, () => {
  logger.info("Express server started on the port 3003");
});
