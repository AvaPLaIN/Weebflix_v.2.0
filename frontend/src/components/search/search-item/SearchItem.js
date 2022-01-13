//* IMPORTS
//     * REACT

//     * COMPONENTS
import { SearchItemContainer } from "./SearchItem.styled";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES

//     * ASSETS

const SearchItem = ({ anime, handleCloseSearchSection }) => {
  //     * INIT

  //     * STATES

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <SearchItemContainer
      to={{
        pathname: `/anime/${anime?._id}`,
      }}
      onClick={() => setTimeout(handleCloseSearchSection, 300)}
    >
      <div className="thumnail">
        <img src={anime?.thumnail} alt="" />
      </div>
      <div className="title">
        <h3>{anime?.title}</h3>
      </div>
    </SearchItemContainer>
  );
};

export default SearchItem;
