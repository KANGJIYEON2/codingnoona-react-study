import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useSearchParams } from "react-router-dom";
import "./MovieRecomand.style.css";
import Card from "react-bootstrap/Card";
import { useMovieRecomandQuery } from "../../../../hooks/useMovieReocomand";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../../constants/responsive";

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
      <h3>추천작</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((result) => (
          <Col lg={3} xs={12} key={result.id}>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${result.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>평점:{result.vote_average}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Carousel>
    </Container>
  );
};

export default MovieRecomand;
