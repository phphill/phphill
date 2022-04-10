import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style-position: inside;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
