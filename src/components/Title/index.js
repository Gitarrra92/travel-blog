import React from "react";
import "./style.css";

const Title = ({ title }) => {
  return (
    <h2 className="title" title={title}>
      {title}
    </h2>
  );
};

export default Title;
