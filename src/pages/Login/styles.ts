import styled from 'styled-components';
import { shade } from 'polished';

export const Test = styled.h1`
  color: red;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /*max-width: 700px;*/

  border-radius: 10px;
  form {
    background: #fff;
    border-radius: 10px;
    margin: 80px 0;
    width: 340px;
    padding: 30px;
    input {
      width: 100%;
      /*margin-top: 10px;
      margin-bottom: 10px;*/
      & + input {
        margin-top: 10px;
      }
    }
    button {
      width: 100%;
      border: 0px;
      margin-top: 20px;
      height: 35px;
      background: #04d361;
      border-radius: 0 5px 5px 0;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#04d361')};
      }
    }
    svg {
      display: flex;
      width: 100%;
    }
  }
`;
