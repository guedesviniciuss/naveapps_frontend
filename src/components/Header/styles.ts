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
    /* justify-content: space-between; */
    align-items: center;
    width: 100%;
    max-width: 1300px;

    ul {
      list-style-type: none;
      display: flex;
      flex: 1;
      padding: 0 50px;

      li {
        display: flex;
        align-items: center;
        color: #fff;

        svg {
          margin-right: 10px;
        }

        a {
          color: #fff;
          text-decoration: none;

        &:hover {
          color: ${shade(0.4, '#fff')};
        }
      }

        &:hover {
          color: ${shade(0.4, '#fff')};
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

  strong {
    color: #fff;
    cursor: pointer;

    &:hover {
          color: ${shade(0.4, '#fff')};
        }
  }
`;
