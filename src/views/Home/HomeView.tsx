import React from "react";
import Card from "react-bootstrap/Card";

const HomeView = () => {
  return (
    <Card style={{ textAlign: "center", borderColor: "white" }}>
      <Card.Img src="https://images6.alphacoders.com/909/thumb-1920-909641.png" />
      <Card.Title style={{ marginTop: "1%" }}>
        Welcome to the Rick & Morty App!
      </Card.Title>
    </Card>
  );
};

export default HomeView;
