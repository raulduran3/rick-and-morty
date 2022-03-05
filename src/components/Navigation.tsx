import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const NavigationComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Home
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/characters"
        >
          Characters
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/episodes">
          Episodes
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/locations"
        >
          Locations
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavigationComp;
