import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import { useSearchParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useFetchDetailMoviesQuery } from "../../../../hooks/useDetailPageContent";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import { useMovieVideosQuery } from "../../../../hooks/useVideoId";
import "./MovieDetailContents.style.css";
const MovieDetailContents = () => {
  const [query, setQuery] = useSearchParams();
  const [showModal, setShowModal] = useState(false);

  const detailId = query.get("q");
  const { data, isLoading, isError, error } = useFetchDetailMoviesQuery({
    detailId,
  });
  const {
    data: movieVideoId,
    isLoading: movieIsLoading,
    isError: movieIsError,
    error: movieError,
  } = useMovieVideosQuery({
    detailId,
  });
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  if (isLoading || movieIsLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (isError || movieIsError) {
    return <Alert variant="danger">{error.message || movieError} </Alert>;
  }
  return (
    <Container className="movie-box">
      <Row className="main-title">
        <h2>팝!터지는 무비 맛보고 가세요</h2>
      </Row>
      <Row className="movie-contents">
        <Col xs={12} md={6}>
          <Image
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
            rounded
            className="content-img"
          />
        </Col>
        <Col xs={6} md={6} className="contents-list">
          <div>
            {data?.genres.map((name) => (
              <Badge pill bg="danger">
                {Object.values(name)[1]}
              </Badge>
            ))}
          </div>
          <h3>{data?.title}</h3>
          <div className="overview-list">
            <h4> {data?.tagline}</h4>
            <h6>{data?.overview}</h6>
          </div>
          <div>
            예산 :{" "}
            {data?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div>
            영화수입 :{" "}
            {data?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div> 개봉일 : {data?.release_date}</div>
          <div>런타임: {data?.runtime}분</div>
          <div>
            예고편보기
            <Button variant="warning" onClick={() => setShowModal(true)}>
              재생하기
            </Button>{" "}
            <Modal
              size="xxl"
              show={showModal}
              onHide={() => setShowModal(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              className="movie-modal"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                {movieVideoId?.results?.length > 0 &&
                movieVideoId.results[0].key ? (
                  <YouTube videoId={movieVideoId.results[0].key} opts={opts} />
                ) : (
                  <h3>예고편은 직접 찾아보세요ㅎㅎ</h3>
                )}
              </Modal.Body>
            </Modal>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailContents;
