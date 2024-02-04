import React from "react";
import MovieDetails from "./MovieDetails";
import { useSelector } from "react-redux";
import WatchedMovieCard from "./WatchedMovieCard";

const WatchedMovieList = () => {
  const watchedMovies = useSelector(
    (state) => state.watchedMovies.watchedMovies
  );

  if (!watchedMovies.length) {
    return;
  }

  const averageImdbRating = () => {
    let initialValue = 0;

    let avgRating =
      watchedMovies.reduce(
        (a, m) => parseFloat(m.imdbRating) + a,
        initialValue
      ) / watchedMovies.length;

    return avgRating;
  };

  const averageUserRating = () => {
    let initialValue = 0;
    return (
      watchedMovies.reduce((a, m) => m.userRating + a, initialValue) /
      watchedMovies.length
    );
  };

  const totalRuntime = () => {
    let initialValue = 0;

    let totalRuntimeVal = watchedMovies.reduce(
      (a, m) => parseFloat(m.runtime.split(" ").at(0)) + a,
      initialValue
    );

    return totalRuntimeVal;
  };
  return (
    <div>
      <div className="p-4 bg-[#3d444b] rounded-xl shadow-xl mb-5">
        <h1 className="text-xl mb-4">You have watched : </h1>
        <div className="flex justify-between">
          <h5>#️⃣ {watchedMovies.length} movies</h5>
          <h5>⭐️ {parseFloat(averageImdbRating()).toFixed(2)}</h5>
          <h5>🌟 {parseFloat(averageUserRating()).toFixed(2)}</h5>
          <h5>⏳ {parseFloat(totalRuntime()).toFixed(2)} min</h5>
        </div>
      </div>

      <div>
        {watchedMovies.map((m, i) => (
          <WatchedMovieCard movie={m} key={i} />
        ))}
      </div>
    </div>
  );
};

export default WatchedMovieList;
