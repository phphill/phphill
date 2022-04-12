import styled from 'styled-components';

export const SCNavbar = styled.nav`
  background-color: rgba(1, 247, 205, 1);
  transition: all 1s;
  .navbar-button {
    width: 50px;
    height: 50px;
    padding: 0.5rem;
  }
  .navbar {
    transition: all 1s;
    background-color: royalblue;
    height: 50px;
    @media (min-width: 800px) {
      display: none;
    }
  }
`;

export const SCNavbarMenu = styled.div`
  transition: all 1s;
  ul {
    transition: all 1s;
    list-style: none;
    li {
      transition: all 1s;
      border-radius: 5px;
      padding: 1rem;
      color: black;
      font-weight: bold;
      &:hover {
        background-color: black;
        color: white;
        transition: all 0.5s;
      }
    }
  }
  @media (min-width: 800px) {
    ul {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      background-color: royalblue;
    }
  }
`;

export const SCNavbarMenuHidden = styled.div`
  opacity: 0;
  position: absolute;
  transform: translateY(-100rem);
  transition: all 1s;
  ul {
    li {
      transform: translateX(-50rem);
    }
  }
`;
