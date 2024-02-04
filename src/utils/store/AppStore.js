import { configureStore } from "@reduxjs/toolkit";
import searchMovieSlice from "./searchMovieSlice";
import movieDetailsSlice from "./movieDetailsSlice";
import watchedMoviesSlice from "./watchedMoviesSlice";

const appStore = configureStore({
  reducer: {
    search: searchMovieSlice,
    movieDetails: movieDetailsSlice,
    watchedMovies: watchedMoviesSlice,
  },
});

export default appStore;
