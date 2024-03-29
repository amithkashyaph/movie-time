import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSearchMoviesResults,
  updateSearchQuery,
} from "../utils/store/searchMovieSlice";

import { OMDB_API_KEY } from "../utils/constants";
import { useSerachMovies } from "../hooks/useSearchMovies";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchedMovies] = useSerachMovies(searchQuery);

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
      </div>
      <div className="w-2/12 text-end">
        <h1 className="text-lg text-white">
          Found {searchedMovies.length} results
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
