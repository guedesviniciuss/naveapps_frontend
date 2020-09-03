import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  border: 0px;
  height: 60px;
  background: #04d361;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background: ${shade(0.1, '#04d361')};
  }
`;
