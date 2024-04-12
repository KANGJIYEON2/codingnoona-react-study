import React, { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filterMovies, setFilterMovies] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("장르 선택");
  const [sortPopularity, setSortPopularity] = useState(null);
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  const {
    data: genreData,
    isLoading: isLoad,
    isError: isErrored,
    error: errored,
  } = useMovieGenreQuery();

  useEffect(() => {
    let movies = data?.results || [];
    if (selectedGenre) {
      movies = movies.filter((movie) =>
        movie.genre_ids.includes(selectedGenre)
      );
    }
    if (sortPopularity) {
      movies.sort((a, b) =>
        sortPopularity === "asc"
          ? a.popularity - b.popularity
          : b.popularity - a.popularity
      );
    }
    setFilterMovies(movies);
  }, [data, selectedGenre, sortPopularity]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const toggleSortPopularity = (order) => {
    setSortPopularity(order);
  };

  if (isLoading || isLoad) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (isError || isErrored) {
    return <Alert variant="danger">{error.message || errored.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12} className="sort-items">
          <DropdownButton id="dropdown-item-button" title={selectedGenreName}>
            {genreData?.map((genre) => (
              <Dropdown.Item
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
              >
                {genre.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Col>
            <div className="pupluality-btn">
              <Button
                variant="secondary"
                className="mt-3"
                onClick={() => toggleSortPopularity("desc")}
              >
                인기도 높은 순
              </Button>
              <Button
                variant="secondary"
                className="mt-3"
                onClick={() => toggleSortPopularity("asc")}
              >
                인기도 낮은 순
              </Button>
            </div>
          </Col>
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {filterMovies.map((movie, index) => (
              <Col key={index} lg={4} xs={6} sm={6} md={6}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={data?.total_pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
