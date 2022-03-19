import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  body: string;
  location?: boolean;
  id?: number;
}

const CardComp = ({ title, body, location, id }: CardProps) => {
  return (
    <>
      {location ? (
        <Card>
          <Card.Title>{title}</Card.Title>
          {body === "unknown" ? (
            <Card.Body>{body}</Card.Body>
          ) : (
            <Link
              to="/location"
              state={{
                from: { id: id, type: "location" },
              }}
              className="link"
            >
              <Card.Body>{body}</Card.Body>
            </Link>
          )}
        </Card>
      ) : (
        <Card>
          <Card.Title>{title}</Card.Title>
          <Card.Body>{body}</Card.Body>
        </Card>
      )}
    </>
  );
};

export default CardComp;
