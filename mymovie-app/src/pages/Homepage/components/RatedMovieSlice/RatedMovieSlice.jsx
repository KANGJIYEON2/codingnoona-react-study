import React from "react";
import { useRatedMoviesQuery } from "../../../../hooks/useRatedMoive";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
const RatedMovieSlice = () => {
  const { data, isLoading, isError, error } = useRatedMoviesQuery();
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
        title="Top Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default RatedMovieSlice;
