//* IMPORTS
//     * REACT
import { useState, useEffect } from "react";

//     * COMPONENTS
import { SearchContainer } from "./Search.styled";
import SearchItem from "./search-item/SearchItem";
import Loading from "../loading/Loading";

//     * REDUX / STATES

//     * SERVICES
import { getSearchAnimesByTitle } from "../../services/anime";

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import InfiniteScroll from "react-infinite-scroll-component";

//     * ASSETS

const DEBOUNCE_TIME = 800;

const Navbar = ({ searchValue, accessToken, handleCloseSearchSection }) => {
  //     * INIT

  //     * STATES
  const [animes, setAnimes] = useState([]);
  const [searchAnimes, setSearchAnimes] = useState([]);

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    const timeout = setTimeout(async () => {
      const data = await getSearchAnimesByTitle(accessToken, searchValue);
      if (data?.success) {
        setAnimes(data?.data);
        setSearchAnimes(data?.data?.slice(0, 20));
      }
    }, DEBOUNCE_TIME);

    return () => clearTimeout(timeout);
  }, [accessToken, searchValue]);

  //     * HANDLERS
  const handleAddMoreSearchAnimes = () =>
    setSearchAnimes(animes.slice(0, searchAnimes?.length + 15));

  //     * EVENTS

  //     * RENDER
  return (
    <SearchContainer>
      <div className="search-container">
        <div id="search-list-container">
          {animes && searchAnimes && (
            <InfiniteScroll
              className="search-list-inf"
              dataLength={searchAnimes?.length}
              next={handleAddMoreSearchAnimes}
              hasMore={searchAnimes?.length < animes?.length}
              loader={<Loading />}
              scrollableTarget="search-list-container"
            >
              {searchAnimes?.map((anime) => (
                <SearchItem
                  anime={anime}
                  key={anime._id}
                  handleCloseSearchSection={handleCloseSearchSection}
                />
              ))}
            </InfiniteScroll>
          )}
        </div>
      </div>
    </SearchContainer>
  );
};

export default Navbar;
