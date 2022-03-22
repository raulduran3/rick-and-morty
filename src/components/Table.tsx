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
            <td className="character">{character.name}</td>
            <td>{character.species}</td>
            <td>{character.origin.name}</td>
            <td>{character.location.name}</td>
            <td>
              <Link to={`/character/${character.id}`}>
                <Button variant="light">View</Button>
              </Link>
            </td>
          </tr>
        ))}
      {tableLocationData &&
        tableLocationData.locations.results.map((location: Location) => (
          <tr key={location.id}>
            <td>{location.id}</td>
            <td className="location">{location.name}</td>
            <td>{location.type}</td>
            <td>
              <Link to={`/location/${location.id}`}>
                <Button variant="light">View</Button>
              </Link>
            </td>
          </tr>
        ))}
      {tableEpisodeData &&
        tableEpisodeData.episodes.results.map((episode: Episode) => (
          <tr key={episode.id}>
            <td>{episode.id}</td>
            <td className="episode">{episode.name}</td>
            <td>{episode.air_date}</td>
            <td>
              <Link to={`/episode/${episode.id}`}>
                <Button variant="light">View</Button>
              </Link>
            </td>
          </tr>
        ))}
    </tbody>
  </Table>
);

export default TableComp;
