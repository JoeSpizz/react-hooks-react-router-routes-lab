import React from "react";
import { NavLink } from "react-router-dom";
// Home, Movies, Actors, Directors, 
const linkStyles = {
  display: "inline-block",
  width: "auto",
  padding: "12px",
  margin: "0 6px 6px",
  background: "red",
  textDecoration: "none",
  color: "green",
};
function NavBar() {
  return <div className="navbar">
  <NavLink
  to="/"
  exact
  style={linkStyles}
  activeStyle={{
    background: "lightblue",
    textDecoration: "wavy"
  }}>
  Home
</NavLink>
<NavLink
  to="/movies"
  exact
  style={linkStyles}
  activeStyle={{
    background: "lightblue",
    textDecoration: "wavy"
  }}>
  Movies
</NavLink>
<NavLink
  to="/actors"
  exact
  style={linkStyles}
  activeStyle={{
    background: "lightblue",
    textDecoration: "wavy"
  }}>
  Actors
</NavLink>
<NavLink
  to="/directors"
  exact
  style={linkStyles}
  activeStyle={{
    background: "lightblue",
    textDecoration: "wavy"
  }}>
  Directors
</NavLink>
</div>;
}

export default NavBar;
