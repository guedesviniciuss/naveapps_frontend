import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/symbol_naveapps.svg';
import logoNave from '../../assets/logo_nave.png';
import logoOiFuturo from '../../assets/logo_oi_futuro.png';
import { MainHeader } from './styles';

const Header: React.FC = () => (
  <>
    <MainHeader>
      <div>
        <ul>
          <li>
            <Link to="/users">Usuários</Link>
          </li>
          <li>
            <Link to="/management">Aplicações</Link>
          </li>
        </ul>
        <img src={logo} alt="lal1" />
        <strong>Sair</strong>
      </div>
    </MainHeader>
  </>
);

export default Header;
