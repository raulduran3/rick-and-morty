import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import PaginationComp from "../../components/Pagination";
import TableComp from "../../components/Table";
import LoadingComp from "../../components/Loading";
import { GET_LOCATIONS } from "../../gql/Locations/getLocations";
import { LocationsData, LocationsVars } from "../../types/LocationType";
import { Info } from "../../types/PaginationType";
import { TableHeaderType } from "../../types/TableType";

function LocationsView() {
  const params = useParams();
  const page: number = parseInt(params.page ?? "");
  const { loading, data } = useQuery<LocationsData, LocationsVars>(
    GET_LOCATIONS,
    {
      variables: { page },
    }
  );
  const info = data?.locations.info as Info;
  const header: TableHeaderType[] = [
    { name: "#", id: 1 },
    { name: "Name", id: 2 },
    { name: "Type", id: 3 },
    { name: "Actions", id: 4 },
  ];
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <TableComp headerData={header} tableLocationData={data} />
          <PaginationComp infoData={info} path="locations" currentPage={page} />
        </>
      )}
    </>
  );
}

export default LocationsView;
