//* IMPORTS
//     * REACT
import { useState, useEffect } from "react";

//     * COMPONENTS
import Loading from "../../loading/Loading";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import InfiniteScroll from "react-infinite-scroll-component";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

//     * ASSETS

const Anime = () => {
  //     * INIT
  const anime = useOutletContext();

  //     * STATES
  //     ! REDUX
  //     ! STATE
  const [episodes, setEpisodes] = useState([]);

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    setEpisodes(anime?.episodes?.slice(0, 20));
  }, [anime]);

  //     * HANDLERS
  const handleAddMoreEpisodes = () =>
    setEpisodes(anime?.episodes?.slice(0, episodes.length + 15));

  //     * EVENTS

  //     * RENDER
  return (
    <div className="episodes-scroll-container">
      <h1>Player</h1>
      <InfiniteScroll
        dataLength={episodes?.length}
        next={handleAddMoreEpisodes}
        hasMore={episodes?.length < anime?.episodes?.length}
        loader={<Loading />}
        scrollableTarget="episodes-scroll-container"
      >
        {episodes?.map((episode, index) => (
          <div className="episode" key={index}>
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
  );
};

export default Anime;
