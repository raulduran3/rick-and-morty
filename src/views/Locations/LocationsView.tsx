import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import PaginationComp from "../../components/Pagination";
import TableComp from "../../components/Table";
import LoadingComp from "../../components/Loading";
import HeaderComp from "../../components/Header";
import Container from "react-bootstrap/Container";
import { GET_LOCATIONS } from "../../gql/Locations/getLocations";
import { LocationsData, LocationsVars } from "../../types/LocationType";
import { Info } from "../../types/PaginationType";
import { TableHeaderType } from "../../types/TableType";

function LocationsView() {
  const [page, setPage] = useState<number>(1);
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
      <Container fluid className="container">
        {loading ? (
          <LoadingComp />
        ) : (
          <>
            <HeaderComp />
            <TableComp headerData={header} tableLocationData={data} />
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
}

export default LocationsView;
