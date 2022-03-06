import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import HeaderComp from "../../components/Header";
import Container from "react-bootstrap/Container";
import LoadingComp from "../../components/Loading";
import { GET_LOCATION } from "../../gql/Locations/getLocation";
import { Location, LocationData, LocationVars } from "../../types/LocationType";

interface LocationState {
  from: {
    id: number;
    type: string;
  };
}

const LocationView = () => {
  const location = useLocation();
  const { from } = location.state as LocationState;
  const id: number = from.id;
  const { loading, data } = useQuery<LocationData, LocationVars>(GET_LOCATION, {
    variables: { id },
  });
  const locationData = data?.location as Location;
  return (
    <>
      <Container fluid className="container">
        {loading ? (
          <LoadingComp />
        ) : (
          <>
            <HeaderComp />
            <CardGroup>
              <Card>
                <Card.Title>Location Name</Card.Title>
                <Card.Body id={"test"}>{locationData.name}</Card.Body>
              </Card>
              <Card>
                <Card.Title>Type</Card.Title>
                <Card.Body>{locationData.type}</Card.Body>
              </Card>
              <Card>
                <Card.Title>Dimension</Card.Title>
                <Card.Body>{locationData.dimension}</Card.Body>
              </Card>
              <Card>
                <Card.Title>Created</Card.Title>
                <Card.Body>{locationData.created}</Card.Body>
              </Card>
            </CardGroup>
            <Card style={{ alignItems: "center", padding: "1%" }}>
              <Card.Title>Residents of the location</Card.Title>
              <ListGroup>
                {locationData.residents
                  ? locationData.residents.map((character) => (
                      <Link
                        to="/character"
                        state={{
                          from: { id: character.id, type: "character" },
                        }}
                        style={{ textDecoration: "none" }}
                        key={character.id}
                      >
                        <ListGroup.Item action>{character.name}</ListGroup.Item>
                      </Link>
                    ))
                  : null}
              </ListGroup>
            </Card>
          </>
        )}
      </Container>
    </>
  );
};

export default LocationView;
