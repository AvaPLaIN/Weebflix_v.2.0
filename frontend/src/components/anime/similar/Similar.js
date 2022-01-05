//* IMPORTS
//     * REACT
import { useState, useEffect } from "react";

//     * COMPONENTS
import Slider from "../../slider/Slider";

//     * REDUX / STATES

//     * SERVICES
import { getSimilarAnimeAsAnimeTitle } from "../../../services/anime";

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { useOutletContext } from "react-router-dom";

//     * ASSETS

const Similar = () => {
  //     * INIT
  const { anime, accessToken } = useOutletContext();

  //     * STATES
  //     ! REDUX
  //     ! STATE
  const [similarAnimes, setSimilarAnimes] = useState([]);

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    const fetchSimilarAnimes = async () => {
      const data = await getSimilarAnimeAsAnimeTitle(accessToken, anime?.title);
      if (data?.success) setSimilarAnimes(data?.data);
    };
    fetchSimilarAnimes();
  }, [accessToken, anime]);

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <div>
      <Slider list={similarAnimes} header="similar" />
    </div>
  );
};

export default Similar;
