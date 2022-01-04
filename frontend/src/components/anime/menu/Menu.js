//* IMPORTS
//     * REACT

//     * COMPONENTS
import { MenuContainer } from "./Menu.styled";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { NavLink } from "react-router-dom";

//     * ASSETS

const Menu = ({ anime }) => {
  //     * INIT

  //     * STATES
  //     ! REDUX
  //     ! STATE

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <MenuContainer>
      <NavLink to={{ pathname: `info` }}>Info</NavLink>
      <NavLink to={{ pathname: `player` }}>Player</NavLink>
      <NavLink to={{ pathname: `similar` }}>Similar</NavLink>
    </MenuContainer>
  );
};

export default Menu;
