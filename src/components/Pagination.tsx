import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Info } from "../types/PaginationType";

interface PaginationProps {
  infoData?: Info;
  path: string;
  currentPage: number;
}

const PaginationComp = ({ infoData, path, currentPage }: PaginationProps) => {
  const navigate = useNavigate();
  const info = infoData as Info;
  return (
    <CardGroup className="pagination">
      <Card>
        <Card.Text>
          Showing <strong>{currentPage}</strong> of{" "}
          <strong>{info.pages}</strong> entries
        </Card.Text>
      </Card>
      <Card>
        {currentPage >= 2 && (
          <Button
            className="link"
            variant="dark"
            size="sm"
            onClick={() => navigate(`/${path}/${info.prev}`)}
          >
            Previous
          </Button>
        )}
      </Card>
      <Card>
        {currentPage < info.pages && (
          <Button
            variant="dark"
            size="sm"
            onClick={() => navigate(`/${path}/${info.next}`)}
          >
            Next
          </Button>
        )}
      </Card>
    </CardGroup>
  );
};

export default PaginationComp;
