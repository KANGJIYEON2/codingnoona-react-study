import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "react-multi-carousel/lib/styles.css";
import "./PopularMovieSlice.style.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
const PopularMovieSlice = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message} </Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlice;
