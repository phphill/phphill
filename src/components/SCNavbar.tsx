import styled from 'styled-components';

export const SCNavbar = styled.nav`
  position: sticky;
  top: 0;
  background: rgb(117, 81, 187);
  background: radial-gradient(
    circle,
    rgba(117, 81, 187, 1) 59%,
    rgba(107, 24, 242, 1) 100%
  );
  transition: all 1s;
  .navbar-button {
    width: 50px;
    height: 50px;
    padding: 0.5rem;
    cursor: pointer;
  }
  .navbar {
    background: rgb(111, 66, 193);
    background: linear-gradient(
      90deg,
      rgba(111, 66, 193, 1) 66%,
      rgba(93, 12, 226, 1) 100%
    );
    height: 50px;
    @media (min-width: 800px) {
      display: none;
    }
  }
`;

export const SCNavbarMenu = styled.div`
  background-color: transparent;
  background-color: rgba(100, 34, 212, 0.8);
  position: absolute;
  width: 100%;
  z-index: 10;
  animation-duration: 1s;
  animation-name: navbarDown;
  @keyframes navbarDown {
    0% {
      transform: translateY(-200rem);
    }

    25% {
      transform: translateY(1rem);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(0.5rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  ul {
    transition: all 1s;
    list-style: none;
    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      transition: all 1s;
      border-radius: 5px;
      padding: 1rem;
      color: white;
      font-weight: bold;
      &:hover {
        /* border: 2px solid white;
        border-top: none;
        border-right: none;
        border-left: none;
        border-radius: none; */
        box-shadow: -3px 5px 6px -2px #000000;
        color: white;
        transition: all 0.5s;
      }
    }
  }
  @media (min-width: 800px) {
    position: relative;
    ul {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      background-color: rgba(95, 18, 222, 1);
      li {
        cursor: pointer;
      }
    }
  }
`;

export const SCNavbarMenuHidden = styled.div`
  /* position: absolute;
  opacity: 0; */
  display: none;
  transition: all 1s;
  ul {
    li {
      transition: all 1s;
      transform: translateX(-50rem);
    }
  }
`;
