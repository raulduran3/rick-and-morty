import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const NavigationComp = () => {
  return (
    <>
      <header>
        <h1>Rick & Morty App</h1>
      </header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to={`/characters/${1}`}>
            Characters
          </Link>
          <Link className="nav-link" to={`/episodes/${1}`}>
            Episodes
          </Link>
          <Link className="nav-link" to={`/locations/${1}`}>
            Locations
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationComp;
