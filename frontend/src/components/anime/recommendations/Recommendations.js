//* IMPORTS
//     * REACT
import { useState, useEffect } from "react";

//     * COMPONENTS
import { RecommendationsContainer } from "./Recommendations.styled";
import Slider from "../../slider/Slider";

//     * REDUX / STATES

//     * SERVICES
import { getRecommendationAnimesByGenres } from "../../../services/anime";

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES

//     * ASSETS

const Recommendations = ({ anime, accessToken }) => {
  //     * INIT

  //     * STATES
  //     ! REDUX
  //     ! STATE
  const [recommendationAnimes, setRecommendationAnimes] = useState([]);

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    const fetchRecommendationAnimes = async () => {
      const data = await getRecommendationAnimesByGenres(
        accessToken,
        anime?.genres
      );
      if (data?.success) setRecommendationAnimes(data?.data);
    };
    fetchRecommendationAnimes();
  }, [accessToken, anime]);

  useEffect(() => {
    const sliderContainer = document.querySelector(
      "#recommendation-slider-container .slider-list"
    );
    if (sliderContainer) {
      sliderContainer.style.transform = "translateX(0px)";
      sliderContainer.scrollLeft = 0;
    }
  }, [anime]);

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <>
      {recommendationAnimes?.length > 0 && (
        <RecommendationsContainer id="recommendation-slider-container">
          <Slider list={recommendationAnimes} header="recommendations" />
        </RecommendationsContainer>
      )}
    </>
  );
};

export default Recommendations;
