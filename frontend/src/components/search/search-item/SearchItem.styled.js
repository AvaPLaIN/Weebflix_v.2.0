import styled from "styled-components";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const SearchItemContainer = styled.div`
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
`;
