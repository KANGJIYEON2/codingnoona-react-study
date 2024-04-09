import React from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if (!genreIdList) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        className="card-img"
      />
      <Card.Body className="overlay">
        <Card.Title>{movie.title}</Card.Title>
        {showGenre(movie.genre_ids).map((id, index) => (
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
