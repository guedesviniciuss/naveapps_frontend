import React, { useState, useEffect, MouseEvent } from 'react';

import { Container, Content } from './styles';

const FormCreateApp: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <form>
            <h1>Cadastre-se</h1>
            <input type="text" id="email" placeholder="E-mail" />
            <input type="password" id="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default FormCreateApp;
