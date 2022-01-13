import styled from "styled-components";
import { Link } from "react-router-dom";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const SearchItemContainer = styled(Link)`
  width: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;

  .thumnail {
    overflow: hidden;
    height: 280px;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      background-position: center;
      transition: all 0.1s ease-in-out;
    }
  }

  .title {
    height: max-content;
    width: 100%;
    padding: 1rem 0;

    h3 {
      font-size: 1.3rem;
      color: rgb(var(--font-color-bright-1));
    }
  }

  &:hover {
    .thumnail {
      img {
        transform: scale(1.1);
      }
    }
  }
`;
