import React from "react";
import logo from "./logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" width={90} />
        </Link>
        <h1>Chefs Mentor</h1>
      </nav>
    </header>
  );
};

export default NavBar;
