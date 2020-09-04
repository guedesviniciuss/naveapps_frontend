import React from 'react';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock, FiChevronLeft } from 'react-icons/fi';
import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/naveapps.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Form onSubmit={handleSubmit}>
          <Input
            name="username"
            type="username"
            icon={FiUser}
            id="username"
            placeholder="Nome de usuário"
          />
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
          <Button type="submit">Solicitar Criação</Button>
        </Form>
        <a href="login">
          <FiChevronLeft size={30} />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
