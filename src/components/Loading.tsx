import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingComp = () => {
  return (
    <>
      <Spinner className="spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default LoadingComp;
