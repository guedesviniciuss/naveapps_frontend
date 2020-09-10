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

  img {
    width: 300px;
    margin-bottom: 20px;
  }

  > a {
    color: #e56381;
    text-decoration: none;
    font-weight: 700;
    display: block;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    transition: color 0ms.2s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.2, '#e56381')};
    }
  }

  form {
    border-radius: 10px;
    max-width: 500px;
    padding: 30px;
    text-align: center;
    width: 100%;

    > a {
      text-decoration: none;
      color: #9197a9;
      display: block;
      margin-top: 20px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#9197a9')};
      }
    }
  }
`;
