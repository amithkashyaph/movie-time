import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    searchQueryResults: [],
  },
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addSearchMoviesResults: (state, action) => {
      state.searchQueryResults = action.payload;
    },
  },
});

export const { updateSearchQuery, addSearchMoviesResults } =
  searchMovieSlice.actions;

export default searchMovieSlice.reducer;
