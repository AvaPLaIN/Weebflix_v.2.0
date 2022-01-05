//* IMPORTS
//     * REACT
import { useState, useLayoutEffect } from "react";

//     * COMPONENTS
import SliderLoadingItem from "./slider-item/SliderLoadingItem";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES

//     * ASSETS

const SliderLoading = () => {
  //     * INIT

  //     * STATES
  //          ! REDUX
  //          ! STATE
  const [loadingItemsCount, setLoadingItemsCount] = useState(0);

  //     * REFS

  //     * USE-EFFECT
  useLayoutEffect(() => {
    setLoadingItemsCount(Math.round(window.innerWidth / 150) - 2);
  }, []);

  //     * CUSTOM HOOKS

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER

  return (
    <div className="slider-loading-list">
      {Array.from(Array(loadingItemsCount).keys()).map((item) => (
        <SliderLoadingItem key={item} />
      ))}
    </div>
  );
};

export default SliderLoading;
