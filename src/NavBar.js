import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = ({ dogs }) => {
  return (
    <nav>
      <NavLink exact to="/" className="nav-link">
        Home
      </NavLink>
      {dogs.map((dog) => (
        <NavLink key={dog.name} to={`/dogs/${dog.name}`} className="nav-link">
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;




