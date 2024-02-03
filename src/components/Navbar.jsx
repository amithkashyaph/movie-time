import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSearchMoviesResults,
  updateSearchQuery,
} from "../utils/store/searchMovieSlice";

import { OMDB_API_KEY } from "../utils/constants";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const dispatch = useDispatch();

  const handleMovieSearchClick = async () => {
    if (!searchQuery) return;
    dispatch(updateSearchQuery(searchQuery));

    const data = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchQuery}`
    );

    const json = await data.json();

    console.log(json);

    if (json.Response === "True") {
      dispatch(addSearchMoviesResults(json.Search));
      setSearchedMovies(json.Search);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => handleMovieSearchClick(), 300);

    return () => clearInterval(timer);
  }, [searchQuery]);

  console.log(searchedMovies);

  return (
    <div className="flex items-center justify-between w-[97%] mx-auto px-8 py-3 m-5 bg-[#6741d9] rounded-lg">
      <div className="w-2/12">
        <h1 className="text-2xl text-white">🍿 Movie-Time!</h1>
      </div>
      <div className=" text-white flex justify-center items-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-[500px] px-5 h-12 bg-[#7950f2] text-white rounded-lg border-none shadow-lg focus:outline-none  focus:border-none "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="p-2 m-2" onClick={handleMovieSearchClick}>
          Submit
        </button>
      </div>
      <div className="w-2/12 text-end">
        <h1 className="text-xl text-white">Found 0 results</h1>
      </div>
    </div>
  );
};

export default Navbar;
