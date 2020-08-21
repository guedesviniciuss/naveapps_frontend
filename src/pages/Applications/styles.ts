import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding: 30px 20px;
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
`;

export const Project = styled.div`
  img {
    display: flex;

    margin-top: 50px;
    border-radius: 50%;
    width: 150px;
  }
`;
