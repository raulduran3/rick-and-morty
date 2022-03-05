import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "./Header";

const LoadingComp = () => {
  return (
    <>
      <Header />
      <Spinner className="spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default LoadingComp;
