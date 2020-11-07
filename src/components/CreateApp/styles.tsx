import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: calc(0.4vw + 0.7vh + 2.2vmin);
`;
export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
  flex-direction: column wrap;
  justify-content: space-around;
  flex-basis: 90vh;
  max-height: 100vh;

  border-radius: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-shrink: 3;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #fff;
    margin-top: 50px;
    border-radius: 10px;
    flex-basis: 60vw;
    max-width: 65%;
    max-height: 100%;
    padding: 30px;

    h1 {
      text-align: center;
      color: #9197a9;
    }

    input {
      width: 100%;
      flex: 0;
      flex-basis: 70px;
      padding: 0 24px;
      border: 1px solid #a8a8b3;
      border-radius: 5px;
      color: #3a3a3a;

      margin-top: 20px;

      &::placeholder {
        color: #a8a8b3;
      }
    }

    textarea {
      width: 100%;
      flex-basis: 60px;
      flex-shrink: 3;
      padding: 0 24px;
      border: 1px solid #a8a8b3;
      border-radius: 5px;
      color: #3a3a3a;

      padding: 0 24px;

      margin-top: 20px;

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      width: 100%;
      border: 0px;
      height: 70px;
      background: #04d361;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#04d361')};
      }
    }
  }
`;
