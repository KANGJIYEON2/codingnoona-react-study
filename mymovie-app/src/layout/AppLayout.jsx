import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import "./App.Layout.style.css";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeword = (event) => {
    event.preventDefault();
    navigate(`movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div className="nav-bar">
      <Navbar expand="lg" className="bg-light">
        <Container fluid>
          <Navbar.Brand href="#">
            <span className="netflix-logo">POP!CORN</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="">
                Home
              </Nav.Link>
              <Nav.Link href="/movies" className="">
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-warning" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content-body">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
