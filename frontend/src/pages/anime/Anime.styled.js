import styled from "styled-components";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const AnimeContainer = styled.div`
  .anime-container {
    width: 100%;

    .banner-container {
      width: 100%;
      height: 35vh;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
      }
    }

    .anime-header {
      width: 80%;
      height: max-content;
      margin: auto;
      display: flex;
      gap: 2rem;

      .thumnail-container {
        margin-top: -12rem;
        border: 3px solid rgb(var(--background-color-dark-1));
        height: clamp(350px, 350px, 400px);
        width: clamp(250px, 250px, 300px);
        min-width: 250px;
        overflow: hidden;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-position: center;
        }
      }

      .title-container {
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .option {
          color: rgb(var(--font-color-dark-4));
          width: 80px;
        }

        h1 {
          color: rgb(var(--font-color-bright-1));
          font-size: 3rem;
        }

        .info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;

          p {
            font-size: 1.8rem;
            white-space: nowrap;
          }
        }
      }
    }
  }
`;
