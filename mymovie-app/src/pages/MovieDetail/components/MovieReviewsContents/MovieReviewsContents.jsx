import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useSearchParams } from "react-router-dom";
import { useMovieReviewsQuery } from "../../../../hooks/useReviewMovies";
import { Button } from "react-bootstrap";
const MovieReviewsContents = () => {
  const [query, setQuery] = useSearchParams();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const detailId = query.get("q");
  const { data, isLoading, isError, error } = useMovieReviewsQuery({
    detailId,
  });
  const toggleShowReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

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
      <h3>리뷰보기</h3>
      <Col>
        {data.results.length > 0 ? (
          data.results
            .slice(0, showAllReviews ? data.results.length : 3)
            .map((review) => (
              <div key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </div>
            ))
        ) : (
          <p>아직 리뷰가 없습니다.</p>
        )}
        {data.results.length > 3 && (
          <Button
            variant="warning"
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? "접기" : "더보기"}
          </Button>
        )}
      </Col>
    </Container>
  );
};
export default MovieReviewsContents;
