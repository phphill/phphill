import styled from 'styled-components';

export const SCHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  text-align: center;
  height: calc(100vh - 50px);
  background: rgb(111, 66, 193);
  background: linear-gradient(
    90deg,
    rgba(111, 66, 193, 1) 66%,
    rgba(93, 12, 226, 1) 100%
  );
  color: white;
  .header-animations {
    max-width: 200px;
    height: auto;
  }
`;

export const SCHomeContent = styled.div`
  .home-content-card {
    display: flex;
    align-items: center;
    border: 1px solid yellow;
    img {
      max-width: 200px;
      height: auto;
      border: 1px solid red;
    }
    p {
      border: 1px solid green;
      width: 100%;
    }
  }
`;
