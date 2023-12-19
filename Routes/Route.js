import express from "express";
import { signUp } from "../Controllers/AuthController.js";
import { login } from "../Controllers/AuthController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";
import { getAllMovies } from "../Controllers/MoviesController.js";
import { getMovies } from "../Controllers/MoviesController.js";
import { getTvSeries } from "../Controllers/MoviesController.js";
import { getBookmarkTvSeries } from "../Controllers/MoviesController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/", userVerification);
router.get("/", getAllMovies);
router.get("/movies", getMovies);
router.get("/tvSeries", getTvSeries);
router.get("/bookmarks/tvSeries", getBookmarkTvSeries);

export default router;
