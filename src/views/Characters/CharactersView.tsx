import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import HeaderComp from "../../components/Header";
import TableComp from "../../components/Table";
import PaginationComp from "../../components/Pagination";
import Container from "react-bootstrap/Container";
import LoadingComp from "../../components/Loading";
import { CharactersData, CharactersVars } from "../../types/CharacterType";
import { Info } from "../../types/PaginationType";
import { GET_CHARACTERS } from "../../gql/Characters/getCharacters";
import "../../style/style.css";

const CharactersView = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, data } = useQuery<CharactersData, CharactersVars>(
    GET_CHARACTERS,
    {
      variables: { page },
    }
  );
  const info = data?.characters.info as Info;
  const header: string[] = ["Name", "Species", "Origin", "Location", "Actions"];
  return (
    <>
      <Container fluid className="container">
        {loading ? (
          <LoadingComp />
        ) : (
          <>
            <HeaderComp />
            <TableComp headerData={header} tableCharacterData={data} />
            <PaginationComp
              infoData={info}
              currentPage={page}
              setPage={setPage}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default CharactersView;
