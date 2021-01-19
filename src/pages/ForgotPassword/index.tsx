import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiChevronLeft } from 'react-icons/fi';
import { Spin } from 'antd';
import { Container, Content, AnimationContainer } from './styles';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/naveapps.svg';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);
        const schema = Yup.object({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
        });

        await schema.validate(data, { abortEarly: false });

        api.post('/forgot-password', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado!',
          description:
            'Cheque o seu e-mail para confirmar a recuperação, verifique na caixa de entrada e spam',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              type="text"
              icon={FiMail}
              id="email"
              placeholder="E-mail"
            />

            <Button type="submit" loading={loading}>
              Recuperar
            </Button>
          </Form>
          <Link to="/login">
            <FiChevronLeft />
            Voltar ao Login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
