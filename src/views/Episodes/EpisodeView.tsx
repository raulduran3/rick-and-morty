import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import LoadingComp from "../../components/Loading";
import CardComp from "../../components/Card";
import { EpisodeData, EpisodeVars } from "../../types/EpisodeType";
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
  const episode = data
    ? data.episode
    : {
        id: 1,
        name: "no data",
        air_date: "no data",
        created: "no data",
        episode: "no data",
      };
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <CardGroup>
            <Card>
              <Card.Title>Episode Title</Card.Title>
              <Card.Body id="test">
                #{episode.id} {episode.name}
              </Card.Body>
            </Card>
            <CardComp title="Air Date" body={episode.air_date} />
            <CardComp title="Created" body={episode.created} />
            <CardComp title="Episode" body={episode.episode} />
          </CardGroup>
          <Card className="list">
            <Card.Title>Characters that appeared on the episode</Card.Title>
            <ListGroup>
              {episode.characters
                ? episode.characters.map((character) => (
                    <Link
                      to="/character"
                      state={{
                        from: { id: character.id, type: "character" },
                      }}
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

export default EpisodeView;
