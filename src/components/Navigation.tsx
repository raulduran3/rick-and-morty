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
          <Link className="nav-link" to="/characters">
            Characters
          </Link>
          <Link className="nav-link" to="/episodes">
            Episodes
          </Link>
          <Link className="nav-link" to="/locations">
            Locations
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationComp;
