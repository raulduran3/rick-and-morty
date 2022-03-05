import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Info } from "../types/PaginationType";

interface PaginationProps {
  infoData?: Info;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationComp = ({
  infoData,
  currentPage,
  setPage,
}: PaginationProps) => {
  const info = infoData as Info;
  return (
    <CardGroup>
      <Card>
        <Card.Text>
          Showing <strong>{currentPage}</strong> of{" "}
          <strong>{info.pages}</strong> entries
        </Card.Text>
      </Card>
      <Card>
        {currentPage >= 2 && (
          <Button variant="dark" size="sm" onClick={() => setPage(info.prev)}>
            Previous
          </Button>
        )}
      </Card>
      <Card>
        {currentPage < info.pages && (
          <Button variant="dark" size="sm" onClick={() => setPage(info.next)}>
            Next
          </Button>
        )}
      </Card>
    </CardGroup>
  );
};

export default PaginationComp;
