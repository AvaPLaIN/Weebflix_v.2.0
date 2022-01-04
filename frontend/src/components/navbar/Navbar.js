//* IMPORTS
//     * REACT
import { useState, useCallback } from "react";

//     * COMPONENTS
import { NavbarContainer, NavigationContainer } from "./Navbar.styled";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { NavLink } from "react-router-dom";

//     * ASSETS

const Navbar = () => {
  //     * INIT

  //     * STATES
  const [windowIsScrolled, setWindowIsScrolled] = useState(false);

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS
  window.onscroll = useCallback(() => {
    setWindowIsScrolled(window.pageYOffset ? true : false);
    return () => (window.onscroll = null);
  }, []);

  //     * RENDER
  return (
    <NavbarContainer windowIsScrolled={windowIsScrolled}>
      <NavigationContainer>
        <NavLink to="/" activeClassName="selected">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </NavLink>
        <NavLink to="/animes" activeClassName="selected">
          Animes
        </NavLink>
        <NavLink to="/movies" activeClassName="selected">
          Movies
        </NavLink>
        <NavLink to="/rating" activeClassName="selected">
          Rating
        </NavLink>
        <NavLink to="/mylist" activeClassName="selected">
          My List
        </NavLink>
      </NavigationContainer>
    </NavbarContainer>
  );
};

export default Navbar;
