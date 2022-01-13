import styled, { css } from "styled-components";

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

    &.active {
      background-color: rgba(var(--background-color-dark-1), 0.8);
      border: 1px solid white;
    }
  }

  img {
    height: 3.5rem;
  }

  @media (max-width: 890px) {
    padding: 0 1rem;

    a:not(:first-child) {
      display: none;
    }

    a:first-child {
      img {
        height: 2.5rem;
      }
    }
  }

  @media (max-width: 550px) {
    a {
      display: none;
    }
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 3rem;

  .search-container {
    display: flex;
    align-items: center;
    gap: ${(props) => (props.searchInputIsOpen ? "2rem" : "0rem")};
    background-color: rgb(var(--background-color-dark-1));
    height: 38px;
    padding: 0 1rem;
    border-radius: 1rem;

    .icon {
      cursor: pointer;
      font-size: 1.8rem;
    }

    input {
      height: 100%;
      border: none;
      outline: none;
      color: rgb(var(--font-color-bright-1));
      background-color: rgb(var(--background-color-dark-1));
      width: ${(props) => (props.searchInputIsOpen ? "200px" : "0px")};
      transition: all 0.3s ease-in-out;

      &::placeholder {
        color: rgb(var(--font-color-bright-4));
        opacity: 1;
      }

      &:-ms-input-placeholder {
        color: rgb(var(--font-color-bright-4));
      }

      &::-ms-input-placeholder {
        color: rgb(var(--font-color-bright-4));
      }
    }
  }

  .responsive-menu {
    display: none;

    .icon {
      font-size: 2.4rem;
      color: rgb(var(--font-color-bright-4));
      cursor: pointer;
    }

    .menu-container {
      z-index: 999;
      position: absolute;
      top: 0;
      left: ${(props) => (props.navbarIsOpen ? "0%" : "100%")};
      height: 100vh;
      width: 100%;
      background-color: rgb(var(--background-color-dark-1));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      transition: all 0.5s ease-in-out;

      a,
      p {
        font-size: 2.8rem;
        letter-spacing: 1.2rem;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }

      .close-menu {
        position: absolute;
        top: 2rem;
        right: 2rem;
        padding: 3rem;
        cursor: pointer;

        .icon {
          font-size: 3rem;
        }
      }
    }
  }

  .account-container {
    position: relative;

    .avatar {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;
      background-color: rgb(var(--background-color-dark-1));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 900;
      transition: all 0.2s ease-in-out;
      cursor: default;
    }

    .account-settings {
      position: absolute;
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem;
      background-color: rgb(var(--background-color-dark-1));
      right: 0;
      border-radius: 1rem;
      border-top-right-radius: 0;

      p {
        font-size: 1.6rem;
        cursor: pointer;
      }
    }

    &:hover {
      .avatar {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      .account-settings {
        display: flex;
      }
    }
  }

  @media (max-width: 890px) {
    .account-container {
      display: none;
    }

    .responsive-menu {
      display: flex;
    }
  }

  @media (max-width: 550px) {
    .search-container {
      input {
        width: ${(props) => (props.searchInputIsOpen ? "120px" : "0px")};
      }
    }
  }
`;
