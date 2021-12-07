//* IMPORTS
//     * REACT
import { useState } from 'react';

//     * COMPONENTS
import { NavbarContainer } from './Navbar.styled';

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { Link } from 'react-router-dom';

//     * ASSETS
const Navbar = () => {
  //     * INIT

  //     * STATES
  const [windowIsScrolled, setWindowIsScrolled] = useState(false);

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS
  window.onscroll = () => {
    setWindowIsScrolled(window.pageYOffset ? true : false);
    return () => (window.onscroll = null);
  };

  //     * RENDER
  return (
    <NavbarContainer windowIsScrolled={windowIsScrolled}>
      Navbaraaaaaaaaaaaaa
    </NavbarContainer>
  );
};

export default Navbar;
