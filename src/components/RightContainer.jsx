import React from "react";
import MovieDetails from "./MovieDetails";
import WatchedMovieList from "./WatchedMovieList";
import { useSelector } from "react-redux";

const RightContainer = () => {
  const selectedMovieId = useSelector(
    (state) => state.movieDetails.selectedMovieId
  );
  return (
    <div className="bg-[#2b3035] rounded-xl h-[90vh] text-white w-1/2  mx-6 w">
      {selectedMovieId ? (
        <div className=" ">
          <MovieDetails />
        </div>
      ) : (
        <WatchedMovieList />
      )}
    </div>
  );
};

export default RightContainer;
