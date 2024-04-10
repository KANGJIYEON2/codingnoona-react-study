import React, { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [seletedGenre, setSelectedGenre] = useState(null);
  const [filterMovies, setFilterMovies] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("장르 선택");
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log(data);

  const {
    data: genreData,
    isLoading: isLoad,
    isError: isErrored,
    error: errored,
  } = useMovieGenreQuery();
  useEffect(() => {
    if (seletedGenre && data?.results) {
      const newFilteredMovies = data?.results.filter((movie) =>
        movie.genre_ids.includes(seletedGenre)
      );
      setFilterMovies(newFilteredMovies);
    } else {
      setFilterMovies(data?.results || []);
    }
  }, [seletedGenre, data]);

  useEffect(() => {
    if (seletedGenre) {
      const genre = genreData?.find((g) => g.id === seletedGenre);
      setSelectedGenreName(genre ? genre.name : "장르 선택");
    } else {
      setSelectedGenreName("장르 선택");
    }
  }, [seletedGenre, genreData]);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading || isLoad) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (isError || isErrored) {
    return <Alert variant="danger">{error.message || errored.message} </Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12} className="sort-items">
          <h3> 장르별 검색하기</h3>
          <DropdownButton id="dropdown-item-button" title={selectedGenreName}>
            {genreData?.map((genre) => (
              <Dropdown.Item
                key={genre.id}
                as="button"
                onClick={() =>
                  setSelectedGenre(genre.id) && setSelectedGenreName(genre.name)
                }
              >
                {genre.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {filterMovies.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
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
