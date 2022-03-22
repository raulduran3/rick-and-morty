import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import LoadingComp from "../../components/Loading";
import { GET_CHARACTER } from "../../gql/Characters/getCharacter";
import { CharacterData, CharacterVars } from "../../types/CharacterType";
import CardComp from "../../components/Card";

const CharacterView = () => {
  const params = useParams();
  const id: number = parseInt(params.id ?? "");
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
        origin: { name: "no data", id: undefined },
        location: { name: "no data", id: undefined },
        created: "no data",
        status: "no data",
        image: "no data",
        episode: [{ name: "no data", id: undefined }],
      };
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <CardGroup>
            <CardComp title="Character Name" body={character.name} />
            <CardComp title="Gender" body={character.gender} />
            <CardComp title="Species" body={character.species} />
            <CardComp title="Type" body={character.type} />
          </CardGroup>
          <CardGroup>
            <CardComp
              title="Origin Location"
              body={character.origin.name}
              location
              id={character.origin.id}
            />
            <CardComp
              title="Last Known Location"
              body={character.location.name}
              location
              id={character.location.id}
            />
            <CardComp title="Created" body={character.created} />
            <CardComp title="Status" body={character.status} />
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
                      to={`/episode/${episode.id}`}
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
