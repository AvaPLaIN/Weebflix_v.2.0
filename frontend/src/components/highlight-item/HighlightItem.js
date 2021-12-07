//* IMPORTS
//     * REACT

//     * COMPONENTS
import {
  HighlightItemContainer,
  ItemImage,
  ItemInfo,
} from './HighlightItem.styled';

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

//     * ASSETS

const HighlightItem = ({ anime }) => {
  //     * INIT

  //     * STATES

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <HighlightItemContainer
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <ItemImage src={anime?.banner} alt="" />
      <ItemInfo>
        <img className="logo" src={anime?.logo} alt="" />
        <div className="details">
          <h1 className="title">{anime?.title}</h1>
          <p className="description">{anime?.description}</p>
          <div className="version">
            <span>
              {anime?.title?.toLowerCase().includes('dub') ? 'DUB' : 'SUB'}
            </span>
          </div>
        </div>
        <div className="buttons">
          <Link to="/" className="button playBtn">
            <FontAwesomeIcon className="icon" icon={faPlay} />
            <span>Play</span>
          </Link>
          <Link to="/" className="button">
            <FontAwesomeIcon className="icon" icon={faInfoCircle} />
            <span>More...</span>
          </Link>
        </div>
      </ItemInfo>
    </HighlightItemContainer>
  );
};

export default HighlightItem;
