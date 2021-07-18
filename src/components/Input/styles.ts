import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isHidden: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;


  border: 2px solid #fff;
  color: #ccd2e4;

  display: flex;
  align-items: center;

  ${props =>
    props.isHidden &&
    css`
      display: none;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #79dbd9;
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #79dbd9;
      color: #79dbd9;
    `}

  & + div {
    margin-top: 15px;
  }

  input {
    flex: 1;

    background: transparent;
    border: 0;
    color: #9197a9;

    ::placeholder {
      color: #ccd2e4;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  > svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
