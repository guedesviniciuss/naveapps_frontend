import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Hero = styled.div`
  display: flex;
  margin: 20px 0;

  h1 {
    color: #b8b8b8;
    flex: 1;

    b {
      color: #69bdc5;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #04d361;
    color: #fff;
    width: 200px;
    border-radius: 5px;
    border: 0;

    transition: background-color 0.2s;

    svg {
      margin-right: 5px;
    }

    &:hover {
      background: ${shade(0.1, '#04d361')};
    }
  }
`;
export const Button = styled.button`
  border: 0px;
  border-radius: 5px 5px 5px 5px;
  background: none;

  svg {
    color: #1890ff;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.3, '#1890ff')};
    }
  }
`;
