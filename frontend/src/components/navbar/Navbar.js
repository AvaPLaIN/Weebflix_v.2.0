//* IMPORTS
//     * REACT
import { useState } from 'react';

//     * COMPONENTS
import { NavbarContainer, NavigationContainer } from './Navbar.styled';

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
      <NavigationContainer>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </Link>
        <Link to="/">Animes</Link>
        <Link to="/">Movies</Link>
        <Link to="/">Rating</Link>
        <Link to="/">My List</Link>
      </NavigationContainer>
    </NavbarContainer>
  );
};

export default Navbar;
