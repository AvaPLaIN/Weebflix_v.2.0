//* IMPORTS
//     * REACT

//     * COMPONENTS
import {
  ProgressItemContainer,
  ProgressBarContainer,
  RatingBarContainer,
} from "./ProgressItem.styled";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCheck,
  faMinusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

//     * ASSETS

const ProgressItem = ({ anime, updateAnime }) => {
  //     * INIT

  //     * STATES
  //     ! REDUX
  //     ! STATES

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <ProgressItemContainer>
      <div className="content-container">
        <div className="thumnail">
          <img src={anime?.anime_id?.thumnail} alt="" />
          <Link
            to={{ pathname: `/anime/${anime?.anime_id?._id}/player` }}
            className="play-button-container"
          >
            <FontAwesomeIcon icon={faPlay} className="icon" />
          </Link>
        </div>
        <div className="content-details-container">
          <h2 className="title">{anime?.anime_id?.title}</h2>
          <div className="details">
            <div className="released info">
              <p className="option">Status:</p>
              <p>{anime?.status}</p>
            </div>
            <div className="status info">
              <p className="option">Episodes:</p>
              <p>
                {anime?.count + 1} / {anime?.anime_id?.episodes?.length}
              </p>
            </div>
            <div className="rating info">
              <p className="option">Rating:</p>
              <select
                id="rating"
                className="rating-item-input"
                defaultValue={anime?.rating === -1 ? "-" : anime?.rating}
                onChange={(e) =>
                  updateAnime(
                    anime?._id,
                    anime?.status,
                    anime?.count,
                    anime?.anime_id?.episodes?.length,
                    e?.target?.value
                  )
                }
              >
                <option value={10}>10</option>
                <option value={9}>9</option>
                <option value={8}>8</option>
                <option value={7}>7</option>
                <option value={6}>6</option>
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
                <option value="-">-</option>
              </select>
            </div>
          </div>
        </div>
        <RatingBarContainer rating={anime?.rating} />
      </div>
      <ProgressBarContainer
        progress={Math.round(
          ((anime?.count + 1) / anime?.anime_id?.episodes?.length) * 100
        )}
        status={anime?.status}
      />
      <div className="controls-container">
        <button
          className="control-button complete"
          onClick={(e) =>
            updateAnime(
              anime?._id,
              "completed",
              anime?.count,
              anime?.anime_id?.episodes?.length,
              anime?.rating
            )
          }
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          className="control-button canceled"
          onClick={(e) =>
            updateAnime(
              anime?._id,
              "canceled",
              anime?.count,
              anime?.anime_id?.episodes?.length,
              anime?.rating
            )
          }
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <button
          className="control-button delete"
          onClick={(e) =>
            updateAnime(
              anime?._id,
              "deleted",
              anime?.count,
              anime?.anime_id?.episodes?.length,
              anime?.rating
            )
          }
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </ProgressItemContainer>
  );
};

export default ProgressItem;
