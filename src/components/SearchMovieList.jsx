import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const movieData = [
  {
    Title: "Inception",
    Year: "2010",
    imdbID: "tt1375666",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    Title: "Inception: The Cobol Job",
    Year: "2010",
    imdbID: "tt5295894",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg",
  },
  {
    Title: "Inception: Jump Right Into the Action",
    Year: "2010",
    imdbID: "tt5295990",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SX300.jpg",
  },
  {
    Title: "The Crack: Inception",
    Year: "2019",
    imdbID: "tt6793710",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTU1M2U4OWUtZTQ5OS00OWM1LTljN2EtMWJmZDgxNzUwZGNkXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
  },
  {
    Title: "Inception: Motion Comics",
    Year: "2010–",
    imdbID: "tt1790736",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGRkYzkzZmEtY2YwYi00ZTlmLTgyMTctODE0NTNhNTVkZGIxXkEyXkFqcGdeQXVyNjE4MDMwMjk@._V1_SX300.jpg",
  },
  {
    Title: "Inception",
    Year: "2014",
    imdbID: "tt7321322",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWJmYWJmNWMtZTBmNy00M2MzLTg5ZWEtOGU5ZWRiYTE0ZjVmXkEyXkFqcGdeQXVyNzkyOTM2MjE@._V1_SX300.jpg",
  },
  {
    Title: "Madness Inception",
    Year: "2022",
    imdbID: "tt29258696",
    Type: "movie",
    Poster: "N/A",
  },
  {
    Title: "Inception: 4Movie Premiere Special",
    Year: "2010",
    imdbID: "tt1686778",
    Type: "movie",
    Poster: "N/A",
  },
  {
    Title: "WWA: The Inception",
    Year: "2001",
    imdbID: "tt0311992",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTEyNGJjMTMtZjZhZC00ODFkLWIyYzktN2JjMTcwMmY5MDJlXkEyXkFqcGdeQXVyNDkwMzY5NjQ@._V1_SX300.jpg",
  },
  {
    Title: "Cyberalien: Inception",
    Year: "2017",
    imdbID: "tt7926130",
    Type: "movie",
    Poster: "N/A",
  },
];

const SearchMovieList = () => {
  const searchMovieResults = useSelector(
    (state) => state.search.searchQueryResults
  );

  //   if (!searchMovieResults || searchMovieResults.length === 0) {
  //     return;
  //   }

  console.log("searchMovieResults : ", searchMovieResults);
  return (
    <div className="w-1/2 flex-col p-2 bg-[#2b3035] rounded-xl h-[90vh] overflow-y-scroll">
      {searchMovieResults?.map((movie) => (
        <MovieCard
          year={movie.Year}
          poster={movie.Poster}
          title={movie.Title}
          key={movie.imdbID}
          id={movie.imdbID}
        />
      ))}
    </div>
  );
};

export default SearchMovieList;
