import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { getMovies } from "../Controllers/MoviesController.js";
import { updateMovie } from "../Controllers/MoviesController.js";

const router = express.Router();

// Route to get all movies
router.get("/getMovies", getMovies);
// Route to update a movie by ID (requires authentication token)
router.post("/updateMovie/:movieID", verifyToken, updateMovie);

export default router;
