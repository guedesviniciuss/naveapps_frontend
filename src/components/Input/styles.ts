import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
    props.isFocused &&
    css`
      border-color: #e56381;
      color: #e56381;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #e56381;
    `}

    ${props =>
      props.isErrored &&
      css`
        border-color: red;
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

  svg {
    margin-right: 10px;
  }
`;
