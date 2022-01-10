import styled from "styled-components";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const InfoContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  align-items: flex-start;
  padding: 3rem;
  gap: 3rem;
  height: max-content;

  div {
    flex: 1;
    min-height: 30rem;

    p {
      font-size: 1.5rem;
      font-weight: 800;
    }

    iframe {
      width: 100%;
      max-width: 50rem;
      height: 30rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
