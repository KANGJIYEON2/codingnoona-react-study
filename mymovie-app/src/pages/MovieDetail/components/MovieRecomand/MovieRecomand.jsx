import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./MovieRecomand.style.css";
import { useMovieRecomandQuery } from "../../../../hooks/useMovieReocomand";

const MovieRecomand = () => {
  const [query, setQuery] = useSearchParams();
  const detailId = query.get("q");
  const { data, isLoading, isError, error } = useMovieRecomandQuery({
    detailId,
  });

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
    <Container>
      <h3>추천영화</h3>
    </Container>
  );
};

export default MovieRecomand;
