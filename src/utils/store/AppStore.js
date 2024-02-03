import { configureStore } from "@reduxjs/toolkit";
import searchMovieSlice from "./searchMovieSlice";
import movieDetailsSlice from "./movieDetailsSlice";

const appStore = configureStore({
  reducer: {
    search: searchMovieSlice,
    movieDetails: movieDetailsSlice,
  },
});

export default appStore;
