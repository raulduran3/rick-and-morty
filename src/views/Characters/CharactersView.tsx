import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import TableComp from "../../components/Table";
import PaginationComp from "../../components/Pagination";
import LoadingComp from "../../components/Loading";
import { CharactersData, CharactersVars } from "../../types/CharacterType";
import { Info } from "../../types/PaginationType";
import { TableHeaderType } from "../../types/TableType";
import { GET_CHARACTERS } from "../../gql/Characters/getCharacters";

const CharactersView = () => {
  const params = useParams();
  const page: number = parseInt(params.page ?? "");
  const { loading, data } = useQuery<CharactersData, CharactersVars>(
    GET_CHARACTERS,
    {
      variables: { page },
    }
  );
  const info = data?.characters.info as Info;
  const header: TableHeaderType[] = [
    { name: "Name", id: 1 },
    { name: "Species", id: 2 },
    { name: "Origin", id: 3 },
    { name: "Location", id: 4 },
    { name: "Actions", id: 5 },
  ];
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <TableComp headerData={header} tableCharacterData={data} />
          <PaginationComp
            infoData={info}
            path="characters"
            currentPage={page}
          />
        </>
      )}
    </>
  );
};

export default CharactersView;
