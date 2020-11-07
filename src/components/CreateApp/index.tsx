import React from 'react';

import { Content, Title } from './styles';

import Dropzone from '../UploadFile';

const CreateApp: React.FC = () => {
  return (
    <>
      <Content>
        <form>
          <Title>Cadastre seu aplicativo</Title>
          <div>
            <Dropzone
              dropzoneText="Coloque as imagens aqui"
              filesLimit={5}
              acceptedFiles={['.jpg', '.png']}
            />
          </div>

          <input type="text" id="Nome" placeholder="Nome" />
          <input type="text" id="summary" placeholder="Sumario" />
          <textarea
            id="description"
            placeholder="Descricao"
            rows={4}
            cols={20}
          />
          <button type="submit">Enviar</button>
        </form>
      </Content>
    </>
  );
};

export default CreateApp;
