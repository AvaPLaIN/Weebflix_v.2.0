import styled, { css } from 'styled-components';

//* EVENT COMPONENTS
const windowIsScrolled = css`
  background-color: rgb(var(--background-color-dark-1));
  box-shadow: 0px -2px 21px 4px rgba(var(--background-color-bright-1), 0.3);
`;

//* LOGIC COMPONENTS
const getWindowIsScroller = (props) => {
  if (props.windowIsScrolled) return windowIsScrolled;
};

//* STYLED COMPONENTS
export const NavbarContainer = styled.nav`
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 7rem;
  transition: all 0.2s ease-in;
  color: rgb(var(--font-color-bright-4));
  ${getWindowIsScroller}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 3rem;

  a {
    font-size: var(--font-size-3);
    color: rgb(var(--font-color-bright-1));
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    border-radius: 1rem;

    &:nth-child(2) {
      margin-left: 3rem;
    }

    &:hover {
      background-color: rgba(var(--background-color-dark-2), 0.2);
    }
  }

  img {
    height: 3.5rem;
  }
`;
