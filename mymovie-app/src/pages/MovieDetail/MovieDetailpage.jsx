import React from "react";

import "./MovieDetailpage.style.css";
import MovieDetailContents from "./components/MovieDetailContents/MovieDetailContents";
import MovieReviewsContents from "./components/MovieReviewsContents/MovieReviewsContents";
import MovieRecomand from "./components/MovieRecomand/MovieRecomand";
const MovieDetailpage = () => {
  return (
    <div>
      <MovieDetailContents />
      <MovieReviewsContents />
      <MovieRecomand />
    </div>
  );
};

export default MovieDetailpage;
