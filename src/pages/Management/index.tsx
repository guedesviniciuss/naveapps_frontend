import React, { useState, useEffect, MouseEvent } from 'react';
import { FaTrashAlt as DeleteIcon, FaUndo as UpdateIcon } from 'react-icons/fa';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, TableContainer } from './styles';

interface Project {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
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
                  <td>{project.created_at}</td>
                  <td>{project.updated_at}</td>
                  <td>
                    <button onClick={() => handleDelete(project.id)}>
                      <DeleteIcon size={20} />
                    </button>{' '}
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
