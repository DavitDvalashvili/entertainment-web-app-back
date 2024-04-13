import moviesModel from "../model/movieModel.js";

export const getMovies = async (req, res) => {
  try {
    const { searchTerm, category, bookmark, trending } = req.query;

    // Define the base query object
    let query = {};

    // Add search term condition if searchTerm exists
    if (searchTerm && searchTerm.trim() !== "") {
      query.title = { $regex: searchTerm, $options: "i" };
    }

    if (category == "Movie" || category == "TV Series") {
      query.category = category;
    }

    if (bookmark === "true") {
      query.isBookmarked = bookmark;
    }
    if (trending === "true") {
      query.isTrending = trending;
    }

    // Perform the search based on the constructed query
    const Movies = await moviesModel.find(query);
    res.status(200);
    res.send(Movies);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movieID = req.params.movieID;
    const existingMovie = await moviesModel.findById(movieID);
    console.log(movieID);
    if (!existingMovie) {
      return res.status(404).json({ Message: "Movie not found" });
    }

    // Toggle the isBookmarked field
    existingMovie.isBookmarked = !existingMovie.isBookmarked;

    // Save the updated document
    const updatedMovie = await existingMovie.save();
    res.status(200);
    res.json(updatedMovie);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
