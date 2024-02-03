import React, { useEffect, useState } from "react";
import { OMDB_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedMovie } from "../utils/store/movieDetailsSlice";

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();
  const selectedMovieId = useSelector(
    (state) => state.movieDetails.selectedMovieId
  );

  useEffect(() => {
    if (!selectedMovieId) {
      return;
    }
    fetchMovieDetails();
  }, [selectedMovieId]);

  const fetchMovieDetails = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${selectedMovieId}`
    );
    const data = await res.json();

    dispatch(updateSelectedMovie(data));
    setSelectedMovie(data);
  };

  if (!selectedMovie) return;

  const {
    Title,
    Year,
    Runtime,
    Genre,
    Actors,
    Plot,
    Poster,
    imdbRating,
    Director,
    Released,
  } = selectedMovie;
  return (
    <div className="flex w-full ">
      <div>
        <img src={Poster} alt="movie poster" className="w-[150px]" />
      </div>
      <div className="text-left px-6 py-7">
        <h1 className="text-3xl mb-4">{Title}</h1>
        <h3 className="mb-4">
          {Released} . {Runtime}
        </h3>
        <h4 className="mb-2">{Genre}</h4>
        <h4 className="mb-4">⭐️ Imdb rating : {imdbRating}</h4>
      </div>
    </div>
  );
};

export default MovieDetails;
