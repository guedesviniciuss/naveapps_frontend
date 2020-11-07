import React from 'react';
import { Link } from 'react-router-dom';

import { FiUser, FiList } from 'react-icons/fi';

import logo from '../../assets/naveapps.svg';
import { MainHeader } from './styles';

const Header: React.FC = () => (
  <>
    <MainHeader>
      <div>
        <img src={logo} alt="lal1" />
        <ul>
          <li>
            <FiUser />
            <Link to="/users">Gerenciar Usuários</Link>
          </li>
          <li>
            <FiList />
            <Link to="/management">Gerenciar Aplicações</Link>
          </li>
        </ul>
        <strong>Sair</strong>
      </div>
    </MainHeader>
  </>
);

export default Header;
