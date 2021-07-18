import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.textarea`
  width: 100%;
  flex-basis: 60px;
  flex-shrink: 3;
  border: none;
  border-radius: 10px;
  color: #ccd2e4;
  resize: none;
  padding: 1% 20px;
  border: 1px solid #a8a8b3;
  border-radius: 5px;
  margin: 20px auto;

  &::placeholder {
    color: #a8a8b3;
    margin: 20px;
    padding-top: 10px;
  }

  &::-webkit-input-placeholder {
    padding-top: 10px;
  }

  &::-moz-placeholder {
    padding-top: 10px;
  }

  &::-ms-input-placeholder {
    padding-top: 10px;
  }
`;
