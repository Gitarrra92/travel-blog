import React from "react";
import "../Header/style.css";
import SearchIcon from "../SearchIcon";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="headerMenu">
        <ul className="menuList">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact us</NavLink>
          </li>
        </ul>
        <SearchIcon />
      </nav>
    </header>
  );
};

export default Header;
