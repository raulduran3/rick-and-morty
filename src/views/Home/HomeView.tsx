import React from "react";
import Card from "react-bootstrap/Card";

const HomeView = () => {
  return (
    <Card className="home-card">
      <Card.Img src="https://images6.alphacoders.com/909/thumb-1920-909641.png" />
      <Card.Title className="home-title">
        Welcome to the Rick & Morty App!
      </Card.Title>
    </Card>
  );
};

export default HomeView;
