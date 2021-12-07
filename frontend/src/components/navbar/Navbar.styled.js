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
`;
