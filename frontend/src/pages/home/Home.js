//* IMPORTS
//     * REACT
import React from "react";

//     * COMPONENTS
import { HomeContainer } from "./Home.styled";
import Navbar from "../../components/navbar/Navbar";
import HighlightList from "../../components/home/highlight-list/HighlightList";
import Slider from "../../components/slider/Slider";

//     * REDUX / STATES
import { useSelector } from "react-redux";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES

//     * ASSETS

const Home = () => {
  //     * INIT

  //     * STATES
  //     ! REDUX
  const progressList = useSelector((state) =>
    state?.anime?.progressList?.filter(
      (item) => item.status === "currently watching"
    )
  );
  //     ! STATES

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

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
