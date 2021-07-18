import styled from 'styled-components';
import avatar from '@material-ui/core/Avatar';
import doneAll from '@material-ui/icons/DoneAll';
import button from '@material-ui/core/Button';
import typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { Link as link } from 'react-router-dom';
import { shade } from 'polished';

export const Paper = styled.div`
  margin: 5% auto 5% auto;
  padding: 5px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color:  #FFFFFF;
  width: 70%;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 50px;
    border-radius: 10px;
    flex-basis: 60vw;
    width: 100%;
    max-height: 100%;
    padding: 0;

    > div {
      width: 100%;
      flex: 0;
      flex-basis: 70px;
      padding: 0 24px;
      border: 1px solid #a8a8b3;
      border-radius: 5px;
      color: #3a3a3a;

      margin-top: 20px;

      input::placeholder{
        color:#a8a8b3;
      }
      &::placeholder {
        color:#a8a8b3;
      }
    }
   
    button {
      width: 100%;
      border: 0px;
      height: 70px;
      background: #04d361;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-top:15px;
      &:hover {
        background: ${shade(0.1, '#04d361')};
      }
    }
    }
  }
`;

export const Avatar = styled(avatar)`
  margin: 16px;
  background-color: dark-grey;
  width: 80px;
  height: 80px;
`;

export const CheckIcon = styled(doneAll)`
  font-size: 40px;
`;

export const Form = styled.form`
  width: 100%;
  background: red;
  margin: 20px 0px 15px 0px;
`;

export const Button = styled(button)`
  margin-top: 30px;
  background-color: #5c9a34;
  &:hover {
    background: #6db53f;
  }
`;

export const Title = styled(typography)`
  font-size: calc(0.4vw + 0.7vh + 2.2vmin);
  margin: 10px;
`;

export const ClickIcon = styled(IconButton)`
  margin-right: 8px;
`;

export const Link = styled(link)`
  text-decoration: none;
  color: #fff;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const BackArrowIcon = styled(ArrowBackIcon)`
  font-size: 30px;
`;
