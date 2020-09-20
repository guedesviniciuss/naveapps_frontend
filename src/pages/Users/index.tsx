import React, { useState, useEffect, MouseEvent } from 'react';
import {
  FaTrashAlt as DeleteIcon,
  FaPencilAlt as EditIcon,
} from 'react-icons/fa';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, TableContainer } from './styles';

interface User {
  id: string;
  name: string;
  email: string; // tratar como Date
  permission: string; // tratar como Date
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getApiUsers(): Promise<void> {
      const response = await api.get<User[]>('/users', {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoxMDI0LCJpYXQiOjE2MDA2MjIyMjMsImV4cCI6MTYwMDcwODYyMywic3ViIjoiZWY4Mjc4ZDUtMWFhYi00ZWE4LTkyMDQtMmYwNDM2MjU3NTI4In0.WkcQlGakpPFFP-MBUQKd2ULauJXx5P2Z6QB5wQ0Bvlw',
        },
      });
      setUsers([...users, ...response.data]);
    }

    getApiUsers();
  }, []);

  async function handleDelete(id: string): Promise<void> {
    const application = await api.delete(`/users/${id}`);

    console.log(application.data);

    // temos um array e queremos remover um elemento de dentro desse array
    const usersUpdated = users.filter(p => p.id !== id);
    setUsers([...usersUpdated]);

    console.log(id);
  }

  return (
    <>
      <Header />
      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-Mail</th>
                <th>Tipo</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {users?.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.permission}</td>
                  <td>
                    <button type="button" onClick={() => handleDelete(user.id)}>
                      <DeleteIcon size={20} />
                    </button>
                    <button type="button">
                      <EditIcon size={20} />
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
