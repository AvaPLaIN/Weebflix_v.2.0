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

//     * ASSETS

const ProgressItem = memo(({ anime }) => {
  //     * INIT

  //     * STATES
  //          ! REDUX
  //          ! STATE

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER

  return (
    <SliderItemContainer>
      <SliderItemImageContainer>
        <img
          className="item-image"
          src={anime?.anime_id?.thumnail || anime?.thumnail}
          alt=""
        />
      </SliderItemImageContainer>
      <h2>{anime?.anime_id?.title || anime?.title}</h2>
      <p>{anime?.count && `${anime?.count}. Episode `}</p>
    </SliderItemContainer>
  );
});

export default ProgressItem;
