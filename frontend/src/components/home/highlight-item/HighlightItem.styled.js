import styled from 'styled-components';
import { motion } from 'framer-motion';

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const HighlightItemContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const ItemImage = styled.img`
  height: 100%;
  width: 100%;
  background-position: center;
  object-fit: cover;
  position: absolute;
`;

export const ItemInfo = styled.div`
  position: absolute;
  bottom: 10%;
  left: calc(2% + 5rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  max-width: clamp(300px, 50%, 800px);

  .logo {
    min-width: 40%;
    max-width: 40%;
  }

  .details {
    min-height: max-content;
    max-height: 300px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 1.5rem;
    padding: 1.5rem 3rem 1.5rem 2rem;

    .title {
      color: rgb(var(--font-color-bright-4));
    }

    .description {
      color: rgb(var(--font-color-dark-5));
      font-size: var(--font-size-4);
      overflow-y: scroll;

      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .version {
      position: absolute;
      color: rgb(var(--font-color-dark-5));
      bottom: 0;
      right: 0;
      padding: 1rem;
      border-bottom-right-radius: 1.5rem;
      border-top-left-radius: 1.5rem;
      background-color: rgba(var(--font-color-dark-1), 0.7);

      span {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 2rem;

    .button {
      transition: all 0.1s ease-in;
      padding: 1rem 2rem;
      background-color: rgb(var(--background-color-dark-1));
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      color: rgb(var(--font-color-bright-1));

      .icon,
      span {
        font-size: 2rem;
      }

      &:hover {
        background-color: rgb(var(--font-color-bright-1));
        color: rgb(var(--font-color-dark-1));
      }
    }

    .playBtn {
      background-color: rgb(var(--font-color-bright-1));
      color: rgb(var(--font-color-dark-1));

      &:hover {
        background-color: rgb(var(--font-color-dark-1));
        color: rgb(var(--font-color-bright-1));
      }
    }
  }
`;
