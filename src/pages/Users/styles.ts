import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }
      button {
        width: 42px;
        margin: 5px;
        height: 28px;
        justify-content: center;
        border: 0px;
        background: #04d361;
        border-radius: 5px 5px 5px 5px;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.1, '#04d361')};
        }

        svg {
          display: inline-block;
          vertical-align: middle;
        }
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
