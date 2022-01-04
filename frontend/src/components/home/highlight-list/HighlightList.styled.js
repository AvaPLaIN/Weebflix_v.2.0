import styled from 'styled-components';

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const HighlightListContainer = styled.div`
  height: 95vh;
  width: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    background: linear-gradient(
      to top,
      rgb(var(--background-color-dark-1)),
      transparent
    );
  }

  .arrow {
    color: rgb(var(--font-color-bright-4));
    position: absolute;
    top: 50%;
    width: 5rem;
    height: 7rem;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 900;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 2rem;
    border-radius: 1rem;
    transition: transform 0.1s ease-in;

    &:hover {
      transform: translateY(-50%) scale(1.1);
    }
  }

  .arrowLeft {
    left: 1%;
  }

  .arrowRight {
    right: 1%;
  }

  .slider-container {
    width: 100%;
    height: 95vh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
