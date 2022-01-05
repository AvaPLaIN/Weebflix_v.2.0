//* IMPORTS
//     * REACT
import React, { useState, useEffect } from "react";

//     * COMPONENTS
import { HomeContainer } from "./Home.styled";
import Navbar from "../../components/navbar/Navbar";
import HighlightList from "../../components/home/highlight-list/HighlightList";
import ProgressList from "../../components/home/progress-list/ProgressList";
import Slider from "../../components/slider/Slider";

//     * REDUX / STATES
import { useDispatch, useSelector } from "react-redux";
import { user_logout } from "../../redux/ducks/user";
import { fetch_progress_anime_list } from "../../redux/ducks/anime";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES

//     * ASSETS

const Home = () => {
  //     * INIT
  const dispatch = useDispatch();

  //     * STATES
  //     ! REDUX
  const user = useSelector((state) => state.user.user);
  const accessToken = useSelector((state) => state?.user?.user?.accessToken);
  const progressList = useSelector((state) => state?.anime?.progressList);
  //     ! STATES

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    dispatch(fetch_progress_anime_list(accessToken));
  }, [dispatch, accessToken]);

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
      <Slider list={progressList} header="last seen" />
    </HomeContainer>
  );
};

export default Home;
