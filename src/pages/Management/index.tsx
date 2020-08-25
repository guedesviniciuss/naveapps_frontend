import React, { useState, useEffect, MouseEvent } from 'react';
import { FaTrashAlt as DeleteIcon, FaUndo as UpdateIcon } from 'react-icons/fa';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, TableContainer } from './styles';

import dateConverter from '../../utils/dateConverter';

interface Project {
  id: string;
  name: string;
  created_at: string; // tratar como Date
  updated_at: string; // tratar como Date
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function getApiProjects(): Promise<void> {
      const response = await api.get<Project[]>('/applications');
      setProjects([...projects, ...response.data]);
    }

    getApiProjects();
  }, []);

  async function handleDelete(id: string): Promise<void> {
    const application = await api.delete(`/applications/${id}`);

    console.log(application.data);

    // temos um array e queremos remover um elemento de dentro desse array
    const projectsUpdated = projects.filter(p => p.id !== id);
    setProjects([...projectsUpdated]);

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
                <th>Título</th>
                <th>Criado</th>
                <th>Atualizado</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {projects?.map(project => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{dateConverter(project.created_at)}</td>
                  <td>{dateConverter(project.updated_at)}</td>
                  <td>
                    <button onClick={() => handleDelete(project.id)}>
                      <DeleteIcon size={20} />
                    </button>
                    <button>
                      <UpdateIcon size={20} />
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

export default Dashboard;
