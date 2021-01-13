import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiMail, FiLock, FiChevronLeft } from 'react-icons/fi';
import { Container, Content, AnimationContainer } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/naveapps.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('E-mail inválido'),
        password: Yup.string().min(6, 'No minímo 6 caracteres'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="name"
              type="name"
              icon={FiUser}
              id="name"
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
          <Link to="/login">
            <FiChevronLeft />
            Voltar para o login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
