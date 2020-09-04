import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/naveapps.svg';

const Login: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Form onSubmit={handleSubmit}>
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
        </Form>
        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
    </Container>
  );
};

export default Login;
