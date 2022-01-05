import styled from "styled-components";
import { Link } from "react-router-dom";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const SliderItemContainer = styled(Link)`
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
    text-align: center;
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

export const SliderItemImageContainer = styled.div`
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
    z-index: 2;
    transition: 0.1s ease-in;
    background-color: rgb(var(--background-color-dark-1));

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
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
