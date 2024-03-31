import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Button type="submit">검색하기</Button>
      </Row>
    </Form>
  );
};

export default SearchBox;
