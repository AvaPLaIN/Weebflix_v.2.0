//* IMPORTS
//     * styled-components
import styled from "styled-components";

export const ProgressItemContainer = styled.div`
  width: 45rem;
  min-height: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.1s ease-in;
  cursor: pointer;
  box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.14);
  position: relative;
  background-color: rgb(var(--background-color-dark-1));

  .content-container {
    display: flex;
    flex: 1;
    gap: 1rem;

    .thumnail {
      height: 100%;
      min-width: 15rem;
      max-width: 15rem;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        background-position: center;
      }

      .play-button-container {
        position: absolute;
        bottom: 1.5rem;
        right: -2rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: rgb(var(--background-color-dark-2));
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;

        .icon {
          transform: translateX(1px);
          color: green;
          font-size: 1.6rem;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .content-details-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      gap: 2rem;
      padding-top: 0.5rem;

      .title {
        color: rgb(var(--font-color-dark-5));
        font-size: 2rem;
      }

      .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        width: 100%;

        .option {
          color: rgb(var(--font-color-dark-4));
          width: 80px;
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

          .rating-item-input {
            width: 50px;
            background-color: rgb(var(--background-color-dark-1));
            color: rgb(var(--font-color-dark-4));
            padding: 0.5rem;
          }
        }
      }
    }
  }

  .controls-container {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(var(--background-color-dark-2));
    /* widtxh: 3rem; */
    /* display: none; */
    display: flex;
    width: 0rem;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in;
    overflow: hidden;

    .control-button {
      border: none;
      outline: none;
      height: 3rem;
      width: 100%;
      cursor: pointer;

      &.complete {
        background-color: green;
      }

      &.canceled {
        background-color: orange;
      }

      &.delete {
        background-color: red;
      }
    }
  }

  &:hover {
    transform: scale(1.05);

    .controls-container {
      width: 3rem;
      left: -3rem;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  height: 3px;
  width: ${(props) => props.progress}%;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => {
    if (props.status === "completed") return "green";
    if (props.status === "currently watching") return "yellow";
    if (props.status === "canceled") return "red";
  }};
`;

export const RatingBarContainer = styled.div`
  align-self: flex-end;
  height: ${(props) => props.rating * 10}%;
  width: 3px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => {
    if (props.rating < 3) return "#ff4545";
    if (props.rating < 5) return "#ffa534";
    if (props.rating < 7) return "#ffe234";
    if (props.rating < 9) return "#b7dd29";
    if (props.rating <= 10) return "#57e32c";
  }};
`;
