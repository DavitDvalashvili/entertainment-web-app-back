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
    //console.log(bookmarks.length);
  } catch (error) {
    console.log(`${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getBookmarkMovies = async (req, res, next) => {
  try {
    const bookmarks = await moviesModel.find({
      isBookmarked: true,
      category: "Movie",
    });
    res.status(200);
    res.send(bookmarks);
    //console.log(bookmarks.length);
    next();
  } catch (error) {
    console.log(`${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateMovie = async (req, res, next) => {
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
    res.status(200);
    res.json(updatedMovie);
    next();
  } catch (error) {
    console.log(`${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const filterMovies = async (req, res, next) => {
  try {
    const { searchTerm, category, bookmark } = req.query;

    // Define the base query object
    let query = {};

    // Add search term condition if searchTerm exists
    if (searchTerm && searchTerm.trim() !== "") {
      query.title = { $regex: searchTerm, $options: "i" };
    }

    // Add additional conditions based on the page and bookmark parameters
    if (category === "movies") {
      query.category = "Movie";
    } else if (category === "tvSeries") {
      query.category = "TV Series";
    }

    if (bookmark === "true") {
      query.isBookmarked = true;
    }

    // Perform the search based on the constructed query
    const searchedMovies = await moviesModel.find(query);
    res.status(200);
    res.send(searchedMovies);
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
