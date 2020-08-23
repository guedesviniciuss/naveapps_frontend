import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Container, Content } from './styles';

const Login: React.FC = () => (
  <>
    <Container>
      <Content>
        <form>
          <FaUser size={55} />
          <h1>Login</h1>
          <input type="text" id="email" placeholder="E-mail" />
          <input type="password" id="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  </>
);

export default Login;
