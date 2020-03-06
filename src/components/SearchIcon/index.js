import React, { useState } from "react";
import "./style.css";

const SearchIcon = () => {
  const [search, setSearch] = useState(false);

  const sendSearch = e => {
    e.preventDefault();
  };

  const openSearch = () => {
    setSearch(true);
  };

  const inputSearch = search ? "inputSearch:active" : "inputSearch";

  return (
    <form className="search" onClick={sendSearch}>
      <input className={inputSearch} type="text" placeholder="Search"></input>
      <img
        className="img-search"
        onClick={openSearch}
        src={require("../../assets/img/search.png")}
        alt="search icon"
      ></img>
    </form>
  );
};

export default SearchIcon;
