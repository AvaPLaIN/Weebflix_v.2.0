//* IMPORTS
//     * REACT

//     * COMPONENTS
import { SliderContainer } from "./Slider.styled";
import SliderLoading from "./SliderLoading";
import SliderItem from "./slider-item/SliderItem";

//     * REDUX / STATES
import { useSelector } from "react-redux";

//     * SERVICES

//     * UTILS

//     * HOOKS
import useSlider from "../../hooks/useSlider";

//     * EXTERN LIBRARIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//     * ASSETS

const ProgressList = ({ list, header }) => {
  //     * INIT

  //     * STATES
  //          ! REDUX
  const loading = useSelector((state) => state?.anime?.loading);
  //          ! STATE

  //     * REFS

  //     * USE-EFFECT

  //     * CUSTOM HOOKS
  const [isListScrolled, listRef, moveSlider] = useSlider();

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER

  return (
    <>
      {list && (
        <SliderContainer>
          <h1 className="list-header">{header}</h1>
          <div className="slider-list-container">
            {isListScrolled && (
              <FontAwesomeIcon
                onClick={() => moveSlider("right")}
                className="sliderArrow left"
                icon={faChevronLeft}
              />
            )}
            {loading ? (
              <SliderLoading />
            ) : (
              <div ref={listRef} className="slider-list">
                {list?.map((listItem) => (
                  <SliderItem key={listItem._id} anime={listItem} />
                ))}
              </div>
            )}
            <FontAwesomeIcon
              onClick={() => moveSlider("left")}
              className="sliderArrow right"
              icon={faChevronRight}
            />
          </div>
        </SliderContainer>
      )}
    </>
  );
};

export default ProgressList;
