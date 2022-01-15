//* IMPORTS
//     * REACT
import { useState, useEffect } from "react";

//     * COMPONENTS
import { ProgressListContainer } from "./ProgressList.styled";
import ProgressItem from "../progress-item/ProgressItem";
import Loading from "../../loading/Loading";

//     * REDUX / STATES
import { useSelector, useDispatch } from "react-redux";
import {
  update_progress_anime_list_stats,
  update_progress_anime_list_success,
} from "../../../redux/ducks/anime";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import InfiniteScroll from "react-infinite-scroll-component";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(progressList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(update_progress_anime_list_success(items));
  };

  //     * EVENTS

  //     * RENDER
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ProgressListContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <InfiniteScroll
              className="my-list-container"
              dataLength={animes?.length}
              next={handleAddMoreProgressAnimes}
              hasMore={animes?.length < progressList?.length}
              loader={<Loading />}
            >
              {animes?.map((anime, index) => (
                <Draggable
                  key={anime?._id}
                  draggableId={anime?._id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <ProgressItem
                        key={anime?._id}
                        anime={anime}
                        updateAnime={handleUpdateProgressAnimeStatus}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </InfiniteScroll>
            {provided.placeholder}
          </ProgressListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ProgressList;
