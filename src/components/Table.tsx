import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { LocationsData, Location } from "../types/LocationType";
import { CharactersData, Character } from "../types/CharacterType";
import { EpisodesData, Episode } from "../types/EpisodeType";
import { TableHeaderType } from "../types/TableType";

interface TableProps {
  headerData: TableHeaderType[];
  tableCharacterData?: CharactersData;
  tableLocationData?: LocationsData;
  tableEpisodeData?: EpisodesData;
}

const TableComp = ({
  headerData,
  tableCharacterData,
  tableLocationData,
  tableEpisodeData,
}: TableProps) => (
  <Table>
    <thead>
      <tr>
        {headerData.map((head) => (
          <th key={head.id}>{head.name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableCharacterData &&
        tableCharacterData.characters.results.map((character: Character) => (
          <tr key={character.id}>
            <td>{character.name}</td>
            <td>{character.species}</td>
            <td>{character.origin.name}</td>
            <td>{character.location.name}</td>
            <Link
              to="/character"
              state={{
                from: { id: character.id, type: "character" },
              }}
            >
              <Button variant="light">View</Button>
            </Link>
          </tr>
        ))}
      {tableLocationData &&
        tableLocationData.locations.results.map((location: Location) => (
          <tr key={location.id}>
            <td>{location.id}</td>
            <td>{location.name}</td>
            <td>{location.type}</td>
            <Link
              to="/location"
              state={{
                from: { id: location.id, type: "location" },
              }}
            >
              <Button variant="light">View</Button>
            </Link>
          </tr>
        ))}
      {tableEpisodeData &&
        tableEpisodeData.episodes.results.map((episode: Episode) => (
          <tr key={episode.id}>
            <td>{episode.id}</td>
            <td>{episode.name}</td>
            <td>{episode.air_date}</td>
            <Link
              to="/episode"
              state={{
                from: { id: episode.id, type: "episode" },
              }}
            >
              <Button variant="light">View</Button>
            </Link>
          </tr>
        ))}
    </tbody>
  </Table>
);

export default TableComp;
