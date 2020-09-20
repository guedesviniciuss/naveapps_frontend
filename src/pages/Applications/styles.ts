import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Partners = styled.div`
  width: 100%;
  padding: 30px 20px;

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
`;

export const Project = styled.div`
  padding: 0 50px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: start;

  margin: 30px 0;

  > div {
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 100%;
  }
`;

export const Like = styled.div`
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

  img {
    width: 300px;
    height: 300px;
  }
`;
