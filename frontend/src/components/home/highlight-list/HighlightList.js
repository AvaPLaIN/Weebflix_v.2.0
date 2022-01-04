//* IMPORTS
//     * REACT
import { useState, useEffect } from "react";

//     * COMPONENTS
import { HighlightListContainer } from "./HighlightList.styled";
import HighlightItem from "../highlight-item/HighlightItem";

//     * REDUX / STATES
import { useSelector } from "react-redux";

//     * SERVICES
import { getHighlightAnimeList } from "../../../services/anime";

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";
import { AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

//     * ASSETS

//! FRAMER MOTION OPTIONS
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

//! CONSTANTS
const SLIDER_AUTO_UPDATE_TIME = 8000;

const HighlightList = () => {
  //     * INIT

  //     * STATES
  //          ! REDUX
  const accessToken = useSelector((state) => state?.user?.user?.accessToken);
  //          ! STATE
  const [highlightAnimes, setHighlightAnimes] = useState([]);
  const [[page, direction], setPage] = useState([0, 0]);

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    const fetchHighlightList = async () => {
      const data = await getHighlightAnimeList(accessToken);
      if (data.success) setHighlightAnimes(data?.data);
    };

    fetchHighlightList();
  }, [accessToken]);

  useEffect(() => {
    const interval = setTimeout(() => {
      paginate(1);
    }, SLIDER_AUTO_UPDATE_TIME);

    return () => clearTimeout(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  //     * HANDLERS
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  //     * EVENTS
  const sliderIndex = wrap(0, highlightAnimes?.length, page);
  const debouncedSetSliderIndex = debounce((value) => paginate(value), 500);

  //     * RENDER
  return (
    <HighlightListContainer>
      <div
        className="arrow arrowLeft"
        onClick={() => debouncedSetSliderIndex(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div
        className="arrow arrowRight"
        onClick={() => debouncedSetSliderIndex(1)}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>

      <div className="slider-container">
        <AnimatePresence initial={false} custom={direction}>
          <HighlightItem
            key={page}
            anime={highlightAnimes[sliderIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          />
        </AnimatePresence>
      </div>
    </HighlightListContainer>
  );
};

export default HighlightList;
