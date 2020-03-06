import React from "react";
import "./style.css";

const Description = ({ firstPar, secondPar }) => {
  return (
    <div className="description">
      <p>{firstPar}</p>
      <p>{secondPar}</p>
    </div>
  );
};

export default Description;
