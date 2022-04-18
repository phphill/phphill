import styled from 'styled-components';

export const SCSites = styled.section`
  text-align: center;
  /* background-color: rgba(106, 90, 205, 0.5); */
  background: rgb(108, 108, 215);
  background: radial-gradient(
    circle,
    rgba(108, 108, 215, 1) 18%,
    rgba(170, 70, 252, 1) 100%
  );
  color: white;
  ul,
  li {
    text-align: left;
  }
  .sites-header {
    border: 3px solid;
    border-image: linear-gradient(90deg, #ffbb00, #c20d7c) 1%;
    border-radius: 20px;
  }
  .sites-header-animated {
    animation-name: border-animated;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    @keyframes border-animated {
      from {
        border: 5px solid;
        border-image: linear-gradient(90deg, #c20d7c, #ffbb00) 1%;
        border-radius: 10px;
        padding: 10px;
      }
      to {
        border: 80px solid;
        border-image: linear-gradient(45deg, #ffbb00, #c20d7c) 1%;
        border-radius: 10px;
        padding: 10px;
      }
    }
  }
  .sites-content {
    padding: 0.5rem 0;
  }
  .sites-list {
    padding: 1rem;
  }
  .sites-joker {
    padding: 1rem;
    color: white;
  }
  .sites-assets-and-text {
    padding: 1rem 0;
    margin: 1rem 0;
    /* box-shadow: 1px 6px 18px 4px #fff; */
    box-shadow: 0px 5px 15px 8px rgba(255, 255, 255, 0.92);
  }
`;
