import React from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/naveapps.svg';

const Login: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logo} alt="" />
        <form>
          <Input
            name="email"
            type="text"
            icon={FiMail}
            id="email"
            placeholder="E-mail"
          />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            id="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="recuperar">Esqueci minha senha</a>
        </form>
        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
    </Container>
  </>
);

export default Login;
