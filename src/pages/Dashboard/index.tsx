import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import { Partners, Title, Form, Projects } from './styles';
import logo from '../../assets/naveapps.svg';

import api from '../../services/api';

interface Project {
  id: string;
  name: string;
  summary: string;
  description: string;
  thumbnail: string;
  likes: number;
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  // const [filteredProject, setFilteredProject] = useState([]);
  const [searchProject, setSearchProject] = useState('');

  useEffect(() => {
    async function getApiProjects(): Promise<void> {
      const response = await api.get<Project[]>('/applications');
      setProjects([...projects, ...response.data]);
    }
    getApiProjects();
  }, []);

  function handleFilterProjects(event: FormEvent): void {
    event.preventDefault();
  }

  return (
    <>
      <Partners>
        <img src={logo} alt="NaveApps Logo" />
        <div>
          <img
            src="https://oifuturo.org.br/wp-content/uploads/2018/09/logo_NAVE.png"
            alt="NAVE"
          />
          <img
            src="https://oifuturo.org.br/wp-content/uploads/2020/04/OiFuturo_LogoColorida-01.png"
            alt="Oi Futuro"
          />
        </div>
      </Partners>
      <Title>Veja nossos projetos feitos com carinho</Title>
      <Form onSubmit={handleFilterProjects}>
        <input
          type="text"
          value={searchProject}
          onChange={e => setSearchProject(e.target.value)}
          placeholder="Pesquise um projeto feito por nós 🔍"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Projects>
        {projects?.map(project => (
          <Link to="/applications" key={project.id}>
            <img
              src="http://www.thepopularapps.com/application/upload/Apps/2016/02/apocadino-1.png"
              alt="app"
            />
            <div>
              <strong>{project.name}</strong>
              <p>{project.summary}</p>
              <div>
                <FaHeart size={15} />
                <p>{project.likes}</p>
              </div>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Projects>
    </>
  );
};

export default Dashboard;
