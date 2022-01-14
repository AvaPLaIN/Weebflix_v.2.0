//* IMPORTS
//     * REACT
import { useState, useEffect } from "react";

//     * COMPONENTS
import { ProgressListContainer } from "./ProgressList.styled";
import ProgressItem from "../progress-item/ProgressItem";
import Loading from "../../loading/Loading";

//     * REDUX / STATES
import { useSelector, useDispatch } from "react-redux";
import { update_progress_anime_list_stats } from "../../../redux/ducks/anime";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import InfiniteScroll from "react-infinite-scroll-component";

//     * ASSETS

const ProgressList = () => {
  //     * INIT
  const dispatch = useDispatch();

  //     * STATES
  //     ! REDUX
  const progressList = useSelector((state) => state?.anime?.progressList);
  const accessToken = useSelector((state) => state?.user?.user?.accessToken);
  const [animes, setAnimes] = useState([]);
  //     ! STATES

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    setAnimes(progressList?.slice(0, 20));
  }, [progressList]);

  //     * HANDLERS
  const handleAddMoreProgressAnimes = () =>
    setAnimes(progressList.slice(0, animes?.length + 10));

  const handleUpdateProgressAnimeStatus = (
    progressID,
    status,
    count,
    maxCount,
    rating
  ) => {
    if (status === "completed") count = maxCount - 1;
    dispatch(
      update_progress_anime_list_stats(
        accessToken,
        status,
        progressID,
        count,
        rating
      )
    );
  };

  //     * EVENTS

  //     * RENDER
  return (
    <ProgressListContainer>
      <InfiniteScroll
        className="my-list-container"
        dataLength={animes?.length}
        next={handleAddMoreProgressAnimes}
        hasMore={animes?.length < progressList?.length}
        loader={<Loading />}
      >
        {animes?.map((anime) => (
          <ProgressItem
            key={anime?._id}
            anime={anime}
            updateAnime={handleUpdateProgressAnimeStatus}
          />
        ))}
      </InfiniteScroll>
    </ProgressListContainer>
  );
};

export default ProgressList;
