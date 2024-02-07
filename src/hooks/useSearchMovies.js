import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { OMDB_API_KEY } from "../utils/constants";
import {
  addSearchMoviesResults,
  updateSearchQuery,
} from "../utils/store/searchMovieSlice";

export const useSerachMovies = (searchQuery) => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const dispatch = useDispatch();

  const handleMovieSearchClick = async () => {
    if (!searchQuery) return;
    dispatch(updateSearchQuery(searchQuery));

    const data = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchQuery}`
    );

    const json = await data.json();

    if (json.Response === "True") {
      dispatch(addSearchMoviesResults(json.Search));
      setSearchedMovies(json.Search);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => handleMovieSearchClick(), 300);

    return () => clearInterval(timer);
  }, [searchQuery]);

  return [searchedMovies];
};
