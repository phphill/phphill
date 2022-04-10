import styled from 'styled-components';

export const SCNavbar = styled.nav`
  background-color: red;
  .navbar-button {
    width: 50px;
    height: 50px;
    padding: 0.5rem;
  }
  .navbar {
    background-color: green;
    height: 50px;
  }
  .navbar-menu {
    ul {
      list-style: none;
      li {
        padding: 1rem;
        &:hover {
          background-color: yellow;
        }
      }
    }
  }
`;
