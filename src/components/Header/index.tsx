import React from 'react';

import logo from '../../assets/symbol_naveapps.svg';
import logoNave from '../../assets/logo_nave.png';
import logoOiFuturo from '../../assets/logo_oi_futuro.png';
import { MainHeader } from './styles';

const Header: React.FC = () => (
  <>
    <MainHeader>
      <strong>Entrar</strong>
      <img src={logo} alt="lal1" />
      <strong>Sair</strong>
    </MainHeader>
  </>
);

export default Header;
