import React from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        className="card-img"
      />
      <Card.Body className="overlay">
        <Card.Title>{movie.title}</Card.Title>
        {movie.genre_ids.map((id, index) => (
          <Badge key={index} bg="danger" className="genre-badge">
            {id}
          </Badge>
        ))}
        <Card.Text>Rating: {movie.vote_average}</Card.Text>
        <Card.Text>Popularity: {movie.popularity}</Card.Text>
        <Card.Text>{movie.adult ? "over18" : "under18"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

/*<div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">{id}</Badge>
        ))}
      </div>
      <div>{movie.vote_average}</div>
      <div>{movie.popularity}</div>
      <div>{movie.adult ? "over18" : "under18"}</div>
    </div>
*/
