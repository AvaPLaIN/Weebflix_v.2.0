//* IMPORTS
//     * REACT

//     * COMPONENTS
import { HighlightItemContainer } from './HighlightItem.styled';

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

//     * ASSETS

const HighlightItem = () => {
  //     * INIT

  //     * STATES

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <HighlightItemContainer>
      <img
        src="https://images8.alphacoders.com/118/thumb-1920-1180819.jpg"
        alt=""
      />
      <div className="info">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kimetsu_no_Yaiba_logo.svg/280px-Kimetsu_no_Yaiba_logo.svg.png"
          alt=""
        />
        <div className="details">
          <span className="title">Demon Slayer: Kimetsu no Yaiba</span>
          <span className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            libero? Esse earum architecto nemo optio ipsam magnam velit.
            Dolorem, minima!
          </span>
        </div>
        <div className="buttons">
          <button className="playBtn">
            <FontAwesomeIcon icon={faPlay} />
            <Link to="/">Play</Link>
          </button>
          <button className="infoBtn">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>More...</span>
          </button>
        </div>
      </div>
    </HighlightItemContainer>
  );
};

export default HighlightItem;
