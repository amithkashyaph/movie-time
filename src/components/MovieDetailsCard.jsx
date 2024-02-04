import React from "react";
import { useDispatch } from "react-redux";
import { updateSelectedMovieId } from "../utils/store/movieDetailsSlice";

const MovieDetailsCard = ({
  title,
  released,
  runtime,
  genre,
  poster,
  imdbRating,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-full bg-[#343a40] mb-8">
      <div className="relative ">
        <img src={poster} alt="movie poster" className="w-[180px]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute top-2 left-2 p-1 text-2xl bg-slate-500 rounded-full"
          onClick={() => dispatch(updateSelectedMovieId(null))}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="text-left px-6 py-7">
        <h1 className="text-3xl mb-4">{title}</h1>
        <h3 className="mb-4">
          {released} . {runtime}
        </h3>
        <h4 className="mb-2">{genre}</h4>
        <h4 className="mb-4">⭐️ Imdb rating : {imdbRating}</h4>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
