//* IMPORTS
//     * REACT
import { useState, useEffect, useCallback } from "react";

//     * COMPONENTS
import {
  NavbarContainer,
  NavigationContainer,
  ControlsContainer,
} from "./Navbar.styled";
import Search from "../search/Search";

//     * REDUX / STATES
import { useSelector, useDispatch } from "react-redux";
import { user_logout } from "../../redux/ducks/user";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

//     * ASSETS

const Navbar = () => {
  //     * INIT
  const dispatch = useDispatch();

  //     * STATES
  const [windowIsScrolled, setWindowIsScrolled] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    if (searchInputValue) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [searchInputValue]);

  //     * HANDLERS
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(user_logout());
  };

  const handleCloseSearchSection = () => setSearchInputIsOpen(false);

  //     * EVENTS
  window.onscroll = useCallback(() => {
    setWindowIsScrolled(window.pageYOffset ? true : false);
    return () => (window.onscroll = null);
  }, []);

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
        <NavLink to="/rating" activeClassName="selected">
          Rating
        </NavLink>
        <NavLink to="/mylist" activeClassName="selected">
          My List
        </NavLink>
      </NavigationContainer>
      <ControlsContainer
        searchInputIsOpen={searchInputIsOpen}
        navbarIsOpen={navbarIsOpen}
      >
        <div className="search-container">
          <label htmlFor="searchValueInput">
            <FontAwesomeIcon
              onClick={() => setSearchInputIsOpen((prev) => !prev)}
              className="icon"
              icon={faSearch}
            />
          </label>
          <input
            type="text"
            placeholder="Search..."
            id="searchValueInput"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
          {searchInputIsOpen && (
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setSearchInputValue("")}
              className="icon"
            />
          )}
        </div>
        <div className="account-container">
          <div className="avatar">{user?.username[0]}</div>
          <div className="account-settings">
            <p>{user?.username}</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        </div>
        <div className="responsive-menu">
          <FontAwesomeIcon
            onClick={() => setNavbarIsOpen((prev) => !prev)}
            icon={faBars}
            className="icon"
          />
          <div className="menu-container">
            <Link to="/" onClick={() => setNavbarIsOpen((prev) => !prev)}>
              Homepage
            </Link>
            <NavLink
              to="/rating"
              activeClassName="selected"
              onClick={() => setNavbarIsOpen((prev) => !prev)}
            >
              Rating
            </NavLink>
            <NavLink
              to="/mylist"
              activeClassName="selected"
              onClick={() => setNavbarIsOpen((prev) => !prev)}
            >
              My List
            </NavLink>
            <p onClick={handleLogout}>Logout</p>
            <div
              className="close-menu"
              onClick={() => setNavbarIsOpen((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faTimes} className="icon" />
            </div>
          </div>
        </div>
      </ControlsContainer>
      {searchInputValue && searchInputIsOpen && (
        <Search
          searchValue={searchInputValue}
          accessToken={user?.accessToken}
          handleCloseSearchSection={handleCloseSearchSection}
        />
      )}
    </NavbarContainer>
  );
};

export default Navbar;
