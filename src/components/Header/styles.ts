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
    align-items: center;
    width: 100%;
    max-width: 1300px;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      flex: 1;
      padding: 0 50px;

      li {
        display: flex;
        color: #fff;

        svg {
          margin-right: 5px;
        }

        a {
          color: #fff;
          text-decoration: none;
          transition: color 0.4s;
          display: flex;
          align-items: center;

          &:hover {
            color: ${shade(0.2, '#fff')};
          }
        }

        button {
          display: flex;
          align-items: center;
          color: #fff;
          background: none;
          border: 0;
          transition: color 0.2s;

          &:hover {
            color: ${shade(0.2, '#fff')};
          }
        }

        &:hover {
          color: ${shade(0.2, '#fff')};
        }
      }

      li + li {
        margin-left: 30px;
      }
    }

    img {
      width: 200px;
    }
  }
`;
