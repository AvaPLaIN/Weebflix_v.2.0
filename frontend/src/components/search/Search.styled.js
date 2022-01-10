import styled from "styled-components";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const SearchContainer = styled.div`
  position: absolute;
  top: 7rem;
  left: 0;
  height: calc(100vh - 7rem);
  width: 100%;
  background-color: rgba(var(--background-color-dark-1), 1);
  display: flex;
  align-items: center;
  justify-content: center;

  .search-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    .value {
      text-align: center;
      font-size: 3rem;
      font-weight: 800;
      text-transform: uppercase;
      color: rgb(var(--font-color-bright-1));
    }

    #search-list-container {
      width: 100%;
      height: 100%;
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      background-color: rgb(var(--background-color-dark-1));
      padding: 2rem;
      overflow-y: scroll;

      .search-list-inf {
        display: flex;
        align-items: stretch;
        justify-content: center;
        gap: 5rem;
        flex-wrap: wrap;
      }
    }
  }
`;
