import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  edit: boolean;
  remove: boolean;
}

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
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const Button = styled.button`
  width: 42px;
  height: 28px;
  justify-content: center;
  border: 0px;
  border-radius: 5px 5px 5px 5px;
  color: #fff;

  font-weight: bold;
  transition: background-color 0.2s;
  background: none;
  color: inherit;

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

/**
 *
  ${props =>
    props.remove &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.edit &&
    css`
      border-color: #79dbd9;
      color: #79dbd9;
    `}
 *
 */
