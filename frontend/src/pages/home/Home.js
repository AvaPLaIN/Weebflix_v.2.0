//* IMPORTS
//     * REACT
import React, { useEffect } from "react";

//     * COMPONENTS
import { HomeContainer } from "./Home.styled";
import Navbar from "../../components/navbar/Navbar";
import HighlightList from "../../components/home/highlight-list/HighlightList";
import ProgressList from "../../components/home/progress-list/ProgressList";

//     * REDUX / STATES
import { useDispatch, useSelector } from "react-redux";
import { user_logout } from "../../redux/ducks/user";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES

//     * ASSETS

const Home = () => {
  //     * INIT
  const dispatch = useDispatch();

  //     * STATES
  const user = useSelector((state) => state.user.user);

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    // dispatch(fetch_data(user.accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //     * HANDLERS
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(user_logout());
  };

  //     * EVENTS

  //     * RENDER

  return (
    <HomeContainer>
      <Navbar />
      <HighlightList />
      <ProgressList />
    </HomeContainer>
  );
};

export default Home;
