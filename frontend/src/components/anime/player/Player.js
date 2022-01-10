//* IMPORTS
//     * REACT
import { useState, useEffect, memo, useCallback } from "react";

//     * COMPONENTS
import { PlayerContainer } from "./Player.styled";
import Loading from "../../loading/Loading";

//     * REDUX / STATES
import { useDispatch, useSelector } from "react-redux";
import { update_progress_anime_list } from "../../../redux/ducks/anime";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import InfiniteScroll from "react-infinite-scroll-component";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

//     * ASSETS

const Anime = memo(() => {
  //     * INIT
  const dispatch = useDispatch();
  const { anime, accessToken } = useOutletContext();

  //     * STATES
  //     ! REDUX
  const progressList = useSelector((state) => state?.anime?.progressList);
  //     ! - HELPER - !
  const indexOfProgressAnime = progressList?.findIndex(
    (progressAnime) => progressAnime?.anime_id?._id === anime._id
  );
  //     ! STATE
  const [episodes, setEpisodes] = useState(anime?.episodes?.slice(0, 20));
  const [currentEpisode, setCurrentEpisode] = useState(
    progressList[indexOfProgressAnime]?.count || 0
  );

  //     * REFS

  //     * HANDLERS
  const handleAddMoreEpisodes = () =>
    setEpisodes(anime?.episodes?.slice(0, episodes.length + 15));

  const handleUpdateProgressList = useCallback(
    (episodeCount) => {
      let status = "currently watching";
      if (episodeCount === episodes?.length - 1) status = "completed";
      dispatch(
        update_progress_anime_list(
          accessToken,
          anime?._id,
          indexOfProgressAnime,
          episodeCount,
          status
        )
      );
    },
    [accessToken, anime?._id, dispatch, episodes?.length, indexOfProgressAnime]
  );

  const handleSkipEpisode = (index) => {
    if (!(index >= 0 && index < anime?.episodes?.length)) return;
    setCurrentEpisode(index);
    handleUpdateProgressList(index);
  };

  //     * USE-EFFECT
  useEffect(() => {
    if (indexOfProgressAnime === -1) {
      handleUpdateProgressList(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //     * EVENTS

  //     * RENDER
  return (
    <PlayerContainer>
      <div id="episodes-scroll-container">
        <InfiniteScroll
          dataLength={episodes?.length}
          next={handleAddMoreEpisodes}
          hasMore={episodes?.length < anime?.episodes?.length}
          loader={<Loading />}
          scrollableTarget="episodes-scroll-container"
        >
          {episodes?.map((episode, index) => (
            <div
              onClick={() => handleSkipEpisode(index)}
              className="episode"
              key={index}
            >
              <p>Episode {index + 1}</p>
              <button>
                <a href="/">
                  <FontAwesomeIcon className="icon" icon={faPlay} />
                </a>
              </button>
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <div className="player-container">
        <div className="current-info">
          <h2>Current Episode: {currentEpisode + 1}</h2>
        </div>
        <div className="iframe-container">
          {anime?.episodes?.length > 0 && (
            <iframe
              allowFullScreen={true}
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={anime?.episodes[currentEpisode]}
              frameBorder="0"
              title="player"
            ></iframe>
          )}
        </div>
        <div className="controls">
          <button onClick={() => handleSkipEpisode(currentEpisode - 1)}>
            Prev
          </button>
          <button onClick={() => handleSkipEpisode(currentEpisode + 1)}>
            Next
          </button>
        </div>
      </div>
    </PlayerContainer>
  );
});

export default Anime;
