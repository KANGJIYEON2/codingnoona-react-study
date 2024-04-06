import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import "./App.Layout.style.css";
const AppLayout = () => {
  return (
    <div className="nav-bar">
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#">
            <span className="netflix-logo">NETFLIX</span>
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
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/movies" className="text-white">
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
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
