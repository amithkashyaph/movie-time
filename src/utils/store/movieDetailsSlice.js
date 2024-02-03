import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    selectedMovieId: null,
    selectedMovie: null,
  },
  reducers: {
    updateSelectedMovieId: (state, action) => {
      state.selectedMovieId = action.payload;
    },
    updateSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { updateSelectedMovie, updateSelectedMovieId } =
  movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
