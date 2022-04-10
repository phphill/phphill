import styled from 'styled-components';

export const SCNavbar = styled.nav`
  background-color: rgba(1, 247, 205, 1);
  .navbar-button {
    width: 50px;
    height: 50px;
    padding: 0.5rem;
  }
  .navbar {
    background-color: royalblue;
    height: 50px;
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
`;

export const SCNavbarMenuHidden = styled.div`
  opacity: 0;
  position: absolute;
  transform: translateY(-100rem);
  transition: all 1s;
`;
