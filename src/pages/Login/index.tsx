import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Container, Test, Content } from './styles';

const Login: React.FC = () => (
  <>
    <Container>
      <Content>
        <form>
          <FaUser size={50} />
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" placeholder="E-mail" />
          <label htmlFor="email">Senha</label>
          <input type="password" id="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  </>
);

export default Login;
