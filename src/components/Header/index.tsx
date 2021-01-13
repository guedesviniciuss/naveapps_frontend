import React from 'react';
import { Link } from 'react-router-dom';

import { FiUser, FiList, FiLogOut } from 'react-icons/fi';

import logo from '../../assets/naveapps.svg';
import { MainHeader } from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <MainHeader>
      <div>
        <img src={logo} alt="lal1" />
        <ul>
          <li>
            <Link to="/users">
              <FiUser />
              Gerenciar Usuários
            </Link>
          </li>
          <li>
            <Link to="/management">
              <FiList />
              Gerenciar Aplicações
            </Link>
          </li>
          <li>
            <button type="button" onClick={() => signOut()}>
              <FiLogOut />
              Sair
            </button>
          </li>
        </ul>
      </div>
    </MainHeader>
  );
};

export default Header;
