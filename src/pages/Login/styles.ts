import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-radius: 10px;
  form {
    border-radius: 10px;
    max-width: 500px;
    padding: 30px;

    h1 {
      text-align: center;
      color: #9197a9;
    }

    input {
      width: 100%;
      flex: 1;
      height: 70px;
      padding: 0 24px;
      border: 0px;
      border-radius: 5px;
      color: #3a3a3a;

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
      margin-top: 20px;

      &:hover {
        background: ${shade(0.1, '#04d361')};
      }
    }

    svg {
      display: flex;
      width: 100%;
      color: #ccd2e4;
    }
  }
`;
