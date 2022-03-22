import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import LoadingComp from "../../components/Loading";
import CardComp from "../../components/Card";
import { GET_LOCATION } from "../../gql/Locations/getLocation";
import { LocationData, LocationVars } from "../../types/LocationType";

const LocationView = () => {
  const params = useParams();
  const id: number = parseInt(params.id ?? "");
  const { loading, data } = useQuery<LocationData, LocationVars>(GET_LOCATION, {
    variables: { id },
  });
  const locationData = data
    ? data.location
    : {
        name: "no data",
        type: "no data",
        dimension: "no data",
        created: "no data",
        residents: [{ id: null, name: "no data" }],
      };
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <CardGroup>
            <CardComp title="Location Name" body={locationData.name} />
            <CardComp title="Type" body={locationData.type} />
            <CardComp title="Dimension" body={locationData.dimension} />
            <CardComp title="Created" body={locationData.created} />
          </CardGroup>
          <Card className="list">
            <Card.Title>Residents of the location</Card.Title>
            <ListGroup>
              {locationData.residents
                ? locationData.residents.map((character) => (
                    <Link
                      to={`/character/${character.id}`}
                      className="link"
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
    </>
  );
};

export default LocationView;
