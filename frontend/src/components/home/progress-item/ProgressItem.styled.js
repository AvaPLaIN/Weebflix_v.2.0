import styled from "styled-components";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const ProgressItemContainer = styled.div`
  min-width: 15rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  cursor: pointer;

  h2,
  p {
    white-space: nowrap;
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    color: rgb(var(--font-color-dark-5));
    text-overflow: ellipsis;
    overflow: hidden;
    transition: 0.1s ease-in;
  }

  &:hover {
    h2,
    p {
      color: rgb(var(--font-color-bright-1));
    }

    .item-image {
      transform: scale(1.1);
    }
  }
`;

export const ProgressItemImageContainer = styled.div`
  overflow: hidden;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  .item-image {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border-radius: 50%;
    object-fit: cover;
    z-index: 2;
    transition: 0.1s ease-in;
  }

  &::after {
    position: absolute;
    content: "";
    top: 0rem;
    left: 0;
    z-index: -1;
    width: 100%;
    background-color: green;
    height: 100%;
  }
`;
