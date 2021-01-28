import React, { useState, useEffect, useCallback } from 'react';
import { FiEdit as UpdateIcon, FiUser, FiTrash } from 'react-icons/fi';

import Table from '../../components/Table';
import Header from '../../components/Header';
import CreateUser from '../../components/CreateUser';

import api from '../../services/api';

import getUserType from '../../utils/getUserType';
import dateConverter from '../../utils/dateConverter';

import { Container, Hero, Button } from './styles';

interface User {
  id: string;
  name: string;
  email: string;
  user_profile: number;
  created_at: string;
  updated_at: string;
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [createUser, setCreateUser] = useState(false);

  useEffect(() => {
    async function getApiUsers(): Promise<void> {
      const response = await api.get<User[]>('/users', {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoyMDQ4LCJpYXQiOjE2MTE3OTU0NzAsImV4cCI6MTYxMTg4MTg3MCwic3ViIjoiMjlmMGM5YzktOTQxYS00ZmZhLWE0YmUtNjNlYzA2NTI5ZjUwIn0.95TEOZMvDA8eaxaJh_26Qj6QBfXGXVP4QH_kEPMHiIc',
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

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Permissao',
      dataIndex: 'user_profile',
      key: 'user_profile',
      align: 'center',
    },
    {
      title: 'Criado Em',
      dataIndex: 'created_at',
      render: (data: string) => <>{dateConverter(data)}</>,
    },
    {
      title: 'Editado Em',
      dataIndex: 'updated_at',
      render: (data: string) => <>{dateConverter(data)}</>,
    },
    {
      title: 'Editar',
      align: 'center',
      render: (text: string, record: any) => (
        <Button onClick={() => console.log(record.id)}>
          <UpdateIcon size={20} />
        </Button>
      ),
    },
    {
      title: 'Excluir',
      align: 'center',
      render: (text: string, record: any) => (
        <Button onClick={() => handleDelete(record.id)}>
          <FiTrash size={20} />
        </Button>
      ),
    },
  ];

  const handleCreateUser = useCallback(() => {
    setCreateUser(() => true);
  }, []);

  return (
    <>
      <Header />
      {!createUser ? (
        <Container>
          <Hero>
            <h1>
              Gerencie aqui os <b>seus usuários</b>
            </h1>
            <button type="button" onClick={handleCreateUser}>
              <FiUser />
              Criar Usuário
            </button>
          </Hero>

          <Table data={users} columns={columns} />
        </Container>
      ) : (
        <CreateUser />
      )}
    </>
  );
};

export default UserDashboard;
