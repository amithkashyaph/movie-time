import { createSlice } from "@reduxjs/toolkit";

const watchedMoviesSlice = createSlice({
  name: "watchedMovies",
  initialState: {
    watchedMovies: [],
  },
  reducers: {
    addMovieToWatchedList: (state, action) => {
      state.watchedMovies = [...state.watchedMovies, action.payload];
    },
  },
});

export const { addMovieToWatchedList } = watchedMoviesSlice.actions;

export default watchedMoviesSlice.reducer;
