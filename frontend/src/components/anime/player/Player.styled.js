import styled from "styled-components";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const PlayerContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 1000px;
  margin: 3rem auto;
  background-color: rgb(var(--background-color-dark-2));
  border-radius: 2rem;
  overflow: hidden;

  #episodes-scroll-container {
    min-width: 150px;
    width: 30%;
    max-width: 300px;
    height: 450px;
    overflow-y: scroll;

    .episode {
      width: 100%;
      padding: 1rem 2rem;
      border-bottom: 2px solid rgb(var(--background-color-dark-1));
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      p {
        color: rgb(var(--font-color-bright-1));
        font-size: 1.6rem;
      }

      button {
        background-color: transparent;
        border: none;

        .icon {
          color: rgb(var(--font-color-bright-1));
        }
      }

      &:hover {
        background-color: rgb(var(--background-color-dark-1));
      }
    }
  }

  .player-container {
    position: relative;
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .current-info {
      h2 {
        color: rgb(var(--font-color-dark-4));
        font-size: 1.6rem;
        padding: 1rem 2rem;
        border-left: 1px solid rgb(var(--background-color-dark-1));
      }
    }

    .iframe-container {
      position: relative;
      flex: 1;

      iframe {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 92%;
      }
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        padding: 1rem 2rem;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;

    #episodes-scroll-container {
      min-width: 100%;
      width: 100%;
      max-width: 100%;
      height: 200px;
    }

    .player-container {
      min-height: 350px;
      display: flex;
      flex-direction: column;

      .iframe-container {
        flex: 1;
      }
    }
  }
`;
