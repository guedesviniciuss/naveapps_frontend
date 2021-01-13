import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  line-height: 56px;
  margin-top: 60px;
  max-width: 600px;
`;

export const Partners = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  img {
    width: 300px;
  }

  div {
    img {
      width: 64px;

      & + img {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 600px) {
    div {
      display: none;
    }
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    border: 0px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.1, '#04d361')};
    }
  }
`;

export const Projects = styled.div`
  margin-top: 80px;
  max-width: 1200px;
  height: 90vh;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  h1 {
    margin: 50px;
    font-size: 20px;
    font-weight: 400;
    color: #a8a8b3;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 45%;
    padding: 24px;
    text-decoration: none;

    display: flex;

    transition: transform 0.5s;

    /* excluir */
    margin: 10px;
    /* & + a {
      margin-left: 10px;
    } */

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d3d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      div {
        display: block;
        display: flex;
        justify-content: start;
        align-items: center;

        margin-left: 0;
        margin-top: 10px;

        p {
          margin-top: 0px;
          font-size: 15px;
          font-weight: bold;
          color: red;
        }

        svg {
          margin-left: 0;
          margin-right: 5px;
          color: red;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbcb;
    }
  }

  @media (max-width: 1000px) {
    a {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Hero = styled.div`
  background: #ccd2e4;
  padding: 150px 20px;
`;
