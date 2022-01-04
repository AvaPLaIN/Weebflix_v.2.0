import styled from "styled-components";

//* EVENT COMPONENTS

//* LOGIC COMPONENTS

//* STYLED COMPONENTS
export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  border: 1px solid rgb(var(--background-color-dark-2));
  width: max-content;

  a {
    padding: 1rem 2rem;
    border-right: 1px solid rgb(var(--background-color-dark-2));
    font-size: 2rem;

    &:hover {
      background-color: rgb(var(--background-color-dark-2));
    }

    &.active {
      background-color: rgb(var(--background-color-dark-3));
    }

    &:last-child {
      border-right: none;
    }
  }
`;
