import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import HeaderComp from "../../components/Header";
import Container from "react-bootstrap/Container";
import LoadingComp from "../../components/Loading";
import { Episode, EpisodeData, EpisodeVars } from "../../types/EpisodeType";
import { GET_EPISODE } from "../../gql/Episodes/getEpisode";

interface LocationState {
  from: {
    id: number;
    type: string;
  };
}

const EpisodeView = () => {
  const location = useLocation();
  const { from } = location.state as LocationState;
  const id: number = from.id;
  const { loading, data } = useQuery<EpisodeData, EpisodeVars>(GET_EPISODE, {
    variables: { id },
  });
  const episode = data?.episode as Episode;
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
                <Card.Title>Episode Title</Card.Title>
                <Card.Body id="test">
                  #{episode.id} {episode.name}
                </Card.Body>
              </Card>
              <Card>
                <Card.Title>Air Date</Card.Title>
                <Card.Body>{episode.air_date}</Card.Body>
              </Card>
              <Card>
                <Card.Title>Created</Card.Title>
                <Card.Body>{episode.created}</Card.Body>
              </Card>
              <Card>
                <Card.Title>Episode</Card.Title>
                <Card.Body>{episode.episode}</Card.Body>
              </Card>
            </CardGroup>
            <Card style={{ alignItems: "center", padding: "1%" }}>
              <Card.Title>Characters that appeared on the episode</Card.Title>
              <ListGroup>
                {episode.characters
                  ? episode.characters.map((character) => (
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

export default EpisodeView;
