//* IMPORTS
//     * REACT
import { memo } from "react";

//     * COMPONENTS
import {
  SliderItemContainer,
  SliderItemImageContainer,
} from "./SliderItem.styled";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import LazyLoad from "react-lazyload";

//     * ASSETS

const ProgressItem = memo(({ anime }) => {
  //     * INIT
  const { anime_id: progressAnime } = anime;

  //     * STATES
  //          ! REDUX
  //          ! STATE

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER

  return (
    <SliderItemContainer
      to={
        progressAnime?._id
          ? {
              pathname: `/anime/${progressAnime?._id}/player`,
            }
          : {
              pathname: `/anime/${anime?._id}`,
            }
      }
    >
      <SliderItemImageContainer>
        <LazyLoad className="item-image">
          <img src={progressAnime?.thumnail || anime?.thumnail} alt="" />
        </LazyLoad>
      </SliderItemImageContainer>
      <h2>{progressAnime?.title || anime?.title}</h2>
      <p>
        {typeof anime?.count === "number" && `${anime?.count + 1}. Episode `}
      </p>
    </SliderItemContainer>
  );
});

export default ProgressItem;
