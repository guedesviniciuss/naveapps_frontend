import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

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
    color: #ccd2e4;
  }
`;
