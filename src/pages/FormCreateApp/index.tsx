import React from 'react';

import { Container, Content, Title } from './styles';

import Header from '../../components/Header';

import Dropzone from '../../components/UploadFile';

const FormCreateApp: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <form>
            <Title>Cadastre seu aplicativo</Title>
            <div>
              <Dropzone />
            </div>

            <input type="text" id="Nome" placeholder="Nome" />
            <input type="text" id="summary" placeholder="Sumario" />
            <textarea
              id="description"
              placeholder="Descricao"
              rows={4}
              cols={20}
            >
              asdasdaas
            </textarea>
            <button type="submit">Enviar</button>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default FormCreateApp;
