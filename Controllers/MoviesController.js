import moviesModel from "../model/movieModel.js";

export const getAllMovies = async (req, res, next) => {
  try {
    const movies = await moviesModel.find({});
    res.status(200);
    res.send(movies);
    next();
  } catch (error) {
    console.log(`${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMovies = async (req, res, next) => {
  try {
    const movies = await moviesModel.find({ category: "Movie" });
    res.status(200);
    res.send(movies);
    next();
  } catch (error) {
    console.log(`${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getTvSeries = async (req, res, next) => {
  try {
    const series = await moviesModel.find({ category: "TV Series" });
    res.status(200);
    res.send(series);
    next();
  } catch (error) {
    console.log(`${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getBookmarkTvSeries = async (req, res, next) => {
  try {
    const bookmarks = await moviesModel.find({
      isBookmarked: true,
      category: "TV Series",
    });
    res.status(200);
    res.send(bookmarks);
    next();
  } catch (error) {
    console.log(`${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};
