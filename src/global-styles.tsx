import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

section{
  padding: 1rem 0;
}

nav {
  z-index: 200;
}

.container-full {
  width: 100%;
  padding: 0 .5rem;
}

.container {
  margin: 0 1rem;
}

ul,
li {
  list-style-position: inside;
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  margin: .5rem 0;
}
`;
