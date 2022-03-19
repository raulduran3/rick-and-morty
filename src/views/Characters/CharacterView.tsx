import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import LoadingComp from "../../components/Loading";
import { GET_CHARACTER } from "../../gql/Characters/getCharacter";
import { CharacterData, CharacterVars } from "../../types/CharacterType";
import { ListGroup, CardGroup } from "react-bootstrap";

interface LocationState {
  from: {
    id: number;
    type: string;
  };
}

const CharacterView = () => {
  const location = useLocation();
  const { from } = location.state as LocationState;
  const id: number = from.id;
  const { loading, data } = useQuery<CharacterData, CharacterVars>(
    GET_CHARACTER,
    {
      variables: { id },
    }
  );
  const character = data
    ? data.character
    : {
        name: "no data",
        gender: "no data",
        species: "no data",
        type: "no data",
        origin: { name: "no data", id: null },
        location: { name: "no data", id: null },
        created: "no data",
        status: "no data",
        image: "no data",
        episode: [{ name: "no data", id: null }],
      };

  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <CardGroup>
            <Card>
              <Card.Title>Character Name</Card.Title>
              <Card.Body id="test">{character.name}</Card.Body>
            </Card>
            <Card>
              <Card.Title>Gender</Card.Title>
              <Card.Body>{character.gender}</Card.Body>
            </Card>
            <Card>
              <Card.Title>Species</Card.Title>
              <Card.Body>{character.species}</Card.Body>
            </Card>
            <Card>
              <Card.Title>Type</Card.Title>
              <Card.Body>{character.type}</Card.Body>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Title>Origin Location</Card.Title>
              {character?.origin.name === "unknown" ? (
                <Card.Body>{character.origin.name}</Card.Body>
              ) : (
                <Link
                  to="/location"
                  state={{
                    from: { id: character.origin.id, type: "location" },
                  }}
                  className="link"
                >
                  <Card.Body>{character.origin.name}</Card.Body>
                </Link>
              )}
            </Card>
            <Card>
              <Card.Title>Last Known Location</Card.Title>
              {character.location.name === "unknown" ? (
                <Card.Body>{character.location.name}</Card.Body>
              ) : (
                <Link
                  to="/location"
                  state={{
                    from: { id: character.location.id, type: "location" },
                  }}
                  className="link"
                >
                  <Card.Body>{character.location.name}</Card.Body>
                </Link>
              )}
            </Card>
            <Card>
              <Card.Title>Created</Card.Title>
              <Card.Body>{character.created}</Card.Body>
            </Card>
            <Card>
              <Card.Title>Status</Card.Title>
              <Card.Body>{character.status}</Card.Body>
            </Card>
          </CardGroup>
          <Card className="card-image-parent">
            <Card.Img
              className="card-image-child"
              variant="top"
              src={character.image}
            />
          </Card>
          <Card className="list">
            <Card.Title>Episodes the character has appeared on</Card.Title>
            <ListGroup>
              {character.episode
                ? character.episode.map((episode) => (
                    <Link
                      to="/episode"
                      state={{
                        from: { id: episode.id, type: "episode" },
                      }}
                      className="link"
                      key={episode.id}
                    >
                      <ListGroup.Item action>{episode.name}</ListGroup.Item>
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

export default CharacterView;
