import React from "react";
import logo from "./logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <a href="#">
          <img src={logo} alt="Logo" width={90} />
        </a>
        <h1>Chefs Mentor</h1>
      </nav>
    </header>
  );
};

export default NavBar;
