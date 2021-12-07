//* IMPORTS
//     * REACT
import { useState, useEffect } from 'react';

//     * COMPONENTS
import { HighlightListContainer } from './HighlightList.styled';
import HighlightItem from '../highlight-item/HighlightItem';

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash.debounce';
import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

//     * ASSETS
//! TEST DATA IMAGES
const images = [
  {
    img: 'https://images8.alphacoders.com/118/thumb-1920-1180819.jpg',
    id: 123,
  },
  {
    img: 'https://images2.alphacoders.com/100/thumb-1920-1007550.jpg',
    id: 234,
  },
  {
    img: 'https://www.whatspaper.com/wp-content/uploads/2021/10/demon-slayer-wallpaper-whatspaper-8.jpg',
    id: 345,
  },
];

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
  const [[page, direction], setPage] = useState([0, 0]);

  //     * REFS

  //     * USE-EFFECT
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
  const imageIndex = wrap(0, images?.length, page);
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
            anime={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          />
        </AnimatePresence>
      </div>
    </HighlightListContainer>
  );
};

export default HighlightList;
