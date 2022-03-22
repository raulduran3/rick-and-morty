import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import TableComp from "../../components/Table";
import LoadingComp from "../../components/Loading";
import PaginationComp from "../../components/Pagination";
import { GET_EPISODES } from "../../gql/Episodes/getEpisodes";
import { EpisodesData, EpisodesVars } from "../../types/EpisodeType";
import { Info } from "../../types/PaginationType";
import { TableHeaderType } from "../../types/TableType";

function EpisodesView() {
  const params = useParams();
  const page: number = parseInt(params.page ?? "");
  const { loading, data } = useQuery<EpisodesData, EpisodesVars>(GET_EPISODES, {
    variables: { page },
  });
  const info = data?.episodes.info as Info;
  const header: TableHeaderType[] = [
    { name: "#", id: 1 },
    { name: "Title", id: 2 },
    { name: "Aired on", id: 3 },
    { name: "Actions", id: 4 },
  ];
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <TableComp headerData={header} tableEpisodeData={data} />
          <PaginationComp infoData={info} path="episodes" currentPage={page} />
        </>
      )}
    </>
  );
}

export default EpisodesView;
