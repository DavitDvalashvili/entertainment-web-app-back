import express from "express";
import { signUp, login } from "../Controllers/AuthController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";
import {
  getBookmarkTvSeries,
  getBookmarkMovies,
  getTvSeries,
  getMovies,
  getAllMovies,
} from "../Controllers/MoviesController.js";
import { updateMovie, filterMovies } from "../Controllers/MoviesController.js";

const router = express.Router();
const pages = ["movies", "tvSeries", "bookmarks"];

//post requests
router.post("/signup", signUp);
router.post("/login", login);
router.post("/", userVerification);
//get requests
router.get("/", getAllMovies);
router.get("/movies", getMovies);
router.get("/tvSeries", getTvSeries);
router.get("/bookmarks/tvSeries", getBookmarkTvSeries);
router.get("/bookmarks/movies", getBookmarkMovies);
router.get(`/filterMovies`, filterMovies);
//put requests
pages.map((page) => {
  router.put(`/${page}/:movieID`, updateMovie);
});

export default router;
