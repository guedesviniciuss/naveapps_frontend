import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useToast } from '../../hooks/toast';

import { Content, Title } from './styles';

import Input from '../Input';
import TextArea from '../TextArea';
import Dropzone from '../UploadFile';
import getValidationErrors from '../../utils/getValidationErrors';

interface CreateAppFormData {
  name: string;
  summary: string;
  description: string;
  downloadLink: string;
  videoLink?: string;
}

const CreateApp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const handleSubmit = useCallback(async (data: CreateAppFormData) => {
    try {
      console.log(data);
      const schema = Yup.object({
        name: Yup.string()
          .required('Dê um nome para seu aplicativo')
          .max(32, 'O nome do app deve ser menor que 32 caracteres'),
        summary: Yup.string()
          .required('O aplicativo precisa ter um sumário')
          .max(
            64,
            'O sumário deve ser apenas um resumo com menos de 64 caracteres',
          ),
        description: Yup.string()
          .required('O aplicativo necessita de uma descrição')
          .max(250, 'A descrição não pode conter mais de 250 caracteres')
          .min(64, 'A descrição não pode conter menos de 64 caracteres'),
        downloadLink: Yup.string()
          .url()
          .required('Você precisa colocar o Link de Download da aplicação'),
        videoLink: Yup.string(),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);

      if (err instanceof Yup.ValidationError) {
        return;
      }

      addToast({
        type: 'error',
        title: 'Erro ao cadastrar aplicativo',
        description:
          'Ocorreu um erro ao cadastrar o aplicativo, tente novamente mais tarde.',
      });
    }
  }, []);

  return (
    <>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Title>Cadastre seu aplicativo</Title>
          <div>
            <Dropzone
              dropzoneText="Coloque as imagens aqui"
              filesLimit={4}
              acceptedFiles={['.jpg', '.png']}
            />
          </div>

          <Input name="name" type="text" id="Nome" placeholder="Nome" />
          <Input
            name=" summary"
            type="text"
            id="summary"
            placeholder="Sumario"
          />
          <TextArea
            id="description"
            name="description"
            placeholder="Descricao"
            rows={4}
            cols={20}
          />
          <Input
            name="link"
            type="text"
            id="link"
            placeholder="Link para Download"
          />
          <Input
            name="video"
            type="text"
            id="video"
            placeholder="Link do Video"
          />
          <button type="submit">Enviar</button>
        </Form>
      </Content>
    </>
  );
};

export default CreateApp;
