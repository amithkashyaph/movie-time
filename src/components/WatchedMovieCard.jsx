import React from "react";

const WatchedMovieCard = ({ movie }) => {
  const { poster, title, userRating, imdbRating, runtime } = movie;

  return (
    <div className="text-white flex border-gray-600 border-b-[0.5px] m-3 p-3 items-center">
      <div>
        <img src={poster} alt="" className="w-[50px]" />
      </div>
      <div className="p-4">
        <h1 className="mb-3 text-xl font-semibold">{title}</h1>
        <div className="flex gap-10">
          <h4>⭐️ {imdbRating}</h4>
          <h4>🌟 {userRating}</h4>
          <h4>⏳ {runtime}</h4>
        </div>
      </div>
    </div>
  );
};

export default WatchedMovieCard;
