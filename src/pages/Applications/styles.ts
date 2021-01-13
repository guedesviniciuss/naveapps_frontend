import styled, { css } from 'styled-components';

interface AnchorProps {
  typeButton: 'like' | 'download' | 'info';
}

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  padding: 50px 50px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  img {
    width: 200px;
  }

  a {
    display: flex;
    align-items: center;
    color: #afafaf;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s;

    span {
      font-size: 20px;
    }

    svg {
      font-size: 25px;
    }

    &:hover {
      color: #7c7c7c;
    }
  }
`;

export const Project = styled.div`
  padding: 0 50px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: start;

  margin: 50px 0;

  > div {
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 15px;
  }
`;

export const LikedInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: red;

  svg {
    margin-right: 10px;
  }
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 400px;

  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/b8ce0b26856833.5635d86d467a3.png')
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #ed9351;
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;

  flex-wrap: wrap;

  img {
    width: 350px;
    height: 350px;
    margin-top: 30px;
  }
`;

export const Description = styled.div`
  margin: 30px 0;

  h1 {
    margin-bottom: 15px;
  }
`;

export const FixedButtons = styled.div`
  position: fixed;
  bottom: 30px;
  right: 50px;

  a + a {
    margin-top: 30px;
  }
`;

export const Video = styled.video`
  width: 100%;
`;

export const Button = styled.a<AnchorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background: #bfbfbf;
  border: 0;
  color: #fff;
  cursor: pointer;

  transition: background 0.4s;
  transition: transform 0.4s;

  &:hover {
    ${props =>
      props?.typeButton === 'like' &&
      css`
        background: #c53030;
      `};

    ${props =>
      props?.typeButton === 'download' &&
      css`
        background: #1d41f4;
      `};

    transform: translateY(-5px);
  }
`;
