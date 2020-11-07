import React, { useState, useEffect, MouseEvent } from 'react';
import {
  FaTrashAlt as DeleteIcon,
  FaPencilAlt as EditIcon,
  FaUser,
} from 'react-icons/fa';

import Header from '../../components/Header';

import api from '../../services/api';

import getUserType from '../../utils/getUserType';

import { Container, Hero, TableContainer } from './styles';

interface User {
  id: string;
  name: string;
  email: string;
  user_profile: number;
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getApiUsers(): Promise<void> {
      const response = await api.get<User[]>('/users', {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoyMDQ4LCJpYXQiOjE2MDQzNDMyNjAsImV4cCI6MTYwNDQyOTY2MCwic3ViIjoiNzg4Y2YyZTctZWVjMC00ZDM4LWE3MGItMzZmNjBiOGE5ZjFlIn0.rTMUAVBkA8hXWoXdHsvyd2yr-lV9D0pobepyoxhD_1s',
        },
      });
      setUsers([...users, ...response.data]);
    }

    getApiUsers();
  }, []);

  async function handleDelete(id: string): Promise<void> {
    const application = await api.delete(`/users/${id}`);

    console.log(application.data);

    const usersUpdated = users.filter(p => p.id !== id);
    setUsers([...usersUpdated]);

    console.log(id);
  }

  return (
    <>
      <Header />
      <Container>
        <Hero>
          <h1>
            Gerencie aqui os <b>seus usuários</b>
          </h1>
          <button type="button">
            <FaUser />
            Criar Usuário
          </button>
        </Hero>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-Mail</th>
                <th>Tipo</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>

            <tbody>
              {users?.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{getUserType(user.user_profile)}</td>
                  <td>
                    <button type="button">
                      <EditIcon size={20} />
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDelete(user.id)}>
                      <DeleteIcon size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default UserDashboard;
