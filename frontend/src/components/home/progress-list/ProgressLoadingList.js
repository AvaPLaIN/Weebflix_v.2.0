//* IMPORTS
//     * REACT
import { useState, useLayoutEffect } from "react";

//     * COMPONENTS
import ProgressLoadingItem from "../progress-item/ProgressLoadingItem";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES

//     * ASSETS

const ProgressLoadingList = () => {
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
    <div className="progress-loading-list">
      {Array.from(Array(loadingItemsCount).keys()).map((item) => (
        <ProgressLoadingItem key={item} />
      ))}
    </div>
  );
};

export default ProgressLoadingList;
