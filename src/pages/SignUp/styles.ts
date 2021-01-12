import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromDown} 1s;

  img {
    width: 300px;
    margin-bottom: 20px;
  }

  > a {
    color: #e56381;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    transition: color 0ms.2s;

    svg {
      margin-right: 3px;
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

export const Content = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-radius: 10px;
`;
