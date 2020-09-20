import styled from 'styled-components';
import { shade } from 'polished';

export const MainHeader = styled.div`
  height: 60px;
  background: #000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    ul {
      list-style-type: none;
      display: flex;
      li + li {
        margin-left: 30px;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: ${shade(0.4, '#fff')};
      }
    }
    img {
      width: 70px;
      padding: 10px 10px;
    }
  }

  strong {
    color: #fff;
  }
`;
