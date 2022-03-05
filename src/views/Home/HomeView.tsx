import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import NavigationComp from "../../components/Navigation";

const HomeView = () => {
  return (
    <Container className="container">
      <header className="header">
        <h1>Rick & Morty App</h1>
      </header>
      <NavigationComp />
      <Card style={{ textAlign: "center", borderColor: "white" }}>
        <Card.Img src="https://images6.alphacoders.com/909/thumb-1920-909641.png" />
        <Card.Title style={{ marginTop: "1%" }}>
          Welcome to the Rick & Morty App!
        </Card.Title>
      </Card>
    </Container>
  );
};

export default HomeView;
