import React from "react";
import { useDispatch } from "react-redux";
import { updateSelectedMovieId } from "../utils/store/movieDetailsSlice";

const MovieCard = ({ title, poster, year, id }) => {
  const dispatch = useDispatch();
  const handleMovieSelect = () => {
    dispatch(updateSelectedMovieId(id));
  };
  return (
    <div
      className="flex gap-4 p-4 border-gray-600 border-b-[0.5px] hover:bg-[#343a40] w-full cursor-pointer"
      onClick={handleMovieSelect}
    >
      <div>
        <img src={poster} alt="movie poster" className="w-[50px]" />
      </div>
      <div className="flex-col gap-5 ">
        <h1 className="text-xl text-white font-semibold px-2">{title}</h1>
        <h4 className="text-sm text-white p-2">🗓️ {year}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
