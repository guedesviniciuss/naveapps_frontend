import React, {
  useState,
  useEffect,
  useCallback,
  AnchorHTMLAttributes,
} from 'react';
import { FiEdit as UpdateIcon, FiPlus, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Table from '../../components/Table';
import api from '../../services/api';

import { Container, Hero, Button } from './styles';
import dateConverter from '../../utils/dateConverter';
import { useAuth } from '../../hooks/auth';

interface Project {
  id: string;
  name: string;
  created_at: string; // tratar como Date
  updated_at: string; // tratar como Date
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    async function getApiProjects(): Promise<void> {
      const response = await api.get<Project[]>('/applications/proprietary', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects([...projects, ...response.data]);
    }

    getApiProjects();
  }, []);

  const handleDeleteApp = useCallback(
    async (id: string) => {
      console.log(`o ID eh ${id}`);
      await api.delete(`/applications/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const projectsUpdated = projects.filter(p => p.id !== id);
      setProjects(() => [...projectsUpdated]);
    },
    [projects],
  );

  const columns = [
    {
      title: 'Título',
      dataIndex: 'name',
      key: 'name',
      render: (text: AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a href="/alo">{text}</a>
      ),
    },
    {
      title: 'Criado',
      dataIndex: 'created_at',
      render: (data: string) => <>{dateConverter(data)}</>,
    },
    {
      title: 'Atualizado',
      dataIndex: 'updated_at',
      render: (data: string) => <>{dateConverter(data)}</>,
    },
    {
      title: 'Editar',
      key: 'action',
      align: 'center',
      render: (text: string, record: any) => (
        <Button onClick={() => console.log(record.id)}>
          <UpdateIcon size={20} />
        </Button>
      ),
    },
    {
      title: 'Excluir',
      key: 'action',
      align: 'center',
      render: (text: string, record: any) => (
        <Button onClick={() => handleDeleteApp(record.id)}>
          <FiTrash size={20} />
        </Button>
      ),
    },
  ];

  // rowSelection object indicates the need for row selection

  return (
    <>
      <Header />
      <>
        <Container>
          <Hero>
            <h1>
              Gerencie aqui as <b>suas aplicações</b>
            </h1>

            <Link to="/createapp">
              <FiPlus />
              Criar Aplicação
            </Link>
          </Hero>
          <Table data={projects} columns={columns} />
        </Container>
      </>
    </>
  );
};

export default Dashboard;
