import React, { useEffect, useState } from "react";
import { OMDB_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedMovie,
  updateSelectedMovieId,
} from "../utils/store/movieDetailsSlice";
import MovieDetailsCard from "./MovieDetailsCard";
import StarRating from "./StarRating";
import { addMovieToWatchedList } from "../utils/store/watchedMoviesSlice";

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieRating, setSelectedMovieRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [watchedMovieList, setWatchedMovieList] = useState([]);
  const dispatch = useDispatch();
  const selectedMovieId = useSelector(
    (state) => state.movieDetails.selectedMovieId
  );

  useEffect(() => {
    if (!selectedMovieId) {
      return;
    }
    setIsLoading(true);
    fetchMovieDetails();

    return () => {
      setSelectedMovieRating(0);
      setSelectedMovie(null);
      setIsLoading(true);
    };
  }, [selectedMovieId]);

  const fetchMovieDetails = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${selectedMovieId}`
    );
    const movieData = await res.json();

    dispatch(updateSelectedMovie(movieData));
    setSelectedMovie(movieData);
    setIsLoading(false);
  };

  const handleRatingClick = () => {
    const movieWatched = {
      title: Title,
      poster: Poster,
      runtime: Runtime,
      userRating: selectedMovieRating,
      imdbRating: imdbRating,
      id: imdbID,
    };
    dispatch(addMovieToWatchedList(movieWatched));
    setWatchedMovieList([...watchedMovieList, movieWatched]);
    localStorage.setItem(
      "watchedMovies",
      JSON.stringify([...watchedMovieList, movieWatched])
    );
  };

  if (!selectedMovie) {
    return (
      <h1 className="text-2xl flex justify-center w-full mt-7">Loading...</h1>
    );
  }

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
    imdbID,
  } = selectedMovie;

  return (
    <>
      {isLoading ? (
        <h1 className="text-white">Loading</h1>
      ) : (
        <>
          <MovieDetailsCard
            poster={Poster}
            title={Title}
            imdbRating={imdbRating}
            runtime={Runtime}
            genre={Genre}
            released={Released}
          />
          <StarRating
            max={10}
            color="orange"
            onRatingSelect={setSelectedMovieRating}
            selectedMovieRating={selectedMovieRating}
            onRatingClick={handleRatingClick}
          />
          <h4 className="mx-8 italic mb-5">{Plot}</h4>
          <h4 className="mx-8 mb-5">Starring {Actors}</h4>
          <h4 className="mx-8">Directed by {Director}</h4>
        </>
      )}
    </>
  );
};

export default MovieDetails;
