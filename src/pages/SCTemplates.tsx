import styled from 'styled-components';

export const SCTemplates = styled.section`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  background-color: lightgray;
  h3 {
    font-size: 3rem;
  }
  @media (max-width: 800) {
    max-width: 500px;
    height: auto;
  }
`;
