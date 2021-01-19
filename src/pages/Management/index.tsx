import React, {
  useState,
  useEffect,
  useCallback,
  AnchorHTMLAttributes,
} from 'react';
import {
  FaTrashAlt as DeleteIcon,
  FaUndo as UpdateIcon,
  FaPlus,
} from 'react-icons/fa';

import CreateApp from '../../components/CreateApp';
import Header from '../../components/Header';
import Table from '../../components/Table';
import api from '../../services/api';

import { Container, Hero, TableContainer, Button } from './styles';

import dateConverter from '../../utils/dateConverter';

interface Project {
  id: string;
  name: string;
  created_at: string; // tratar como Date
  updated_at: string; // tratar como Date
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [createProject, setCreateProject] = useState(false);

  useEffect(() => {
    async function getApiProjects(): Promise<void> {
      const response = await api.get<Project[]>('/applications/proprietary', {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoyMDQ4LCJpYXQiOjE2MTA1MDI3NDYsImV4cCI6MTYxMDU4OTE0Niwic3ViIjoiMjlmMGM5YzktOTQxYS00ZmZhLWE0YmUtNjNlYzA2NTI5ZjUwIn0.97x404hsUuWeIz2_ka-lXpAnyXd_Qw7JybapnpOcoQQ',
        },
      });
      setProjects([...projects, ...response.data]);
    }

    getApiProjects();
  }, []);

  const handleDeleteApp = useCallback(
    async (id: string) => {
      await api.delete(`/applications/${id}`);

      const projectsUpdated = projects.filter(p => p.id !== id);
      setProjects(() => [...projectsUpdated]);
    },
    [projects],
  );

  const handleCreateApp = useCallback(() => {
    setCreateProject(() => true);
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a href="/alo">{text}</a>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '9',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '10',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '11',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '12',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '13',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ]; // rowSelection object indicates the need for row selection

  return (
    <>
      <Header />
      {!createProject ? (
        <>
          <Container>
            <Hero>
              <h1>
                Gerencie aqui as <b>suas aplicações</b>
              </h1>
              <button type="button" onClick={handleCreateApp}>
                <FaPlus />
                Criar Aplicação
              </button>
            </Hero>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Criado</th>
                    <th>Atualizado</th>
                    <th>Editar</th>
                    <th>Remover</th>
                  </tr>
                </thead>

                <tbody>
                  {projects?.map(project => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>{dateConverter(project.created_at)}</td>
                      <td>{dateConverter(project.updated_at)}</td>
                      <td>
                        <Button>
                          <UpdateIcon size={20} />
                        </Button>
                      </td>
                      <td>
                        <Button onClick={() => handleDeleteApp(project.id)}>
                          <DeleteIcon size={20} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </Container>
        </>
      ) : (
        <CreateApp />
      )}
      <Table data={data} columns={columns} />
    </>
  );
};

export default Dashboard;
