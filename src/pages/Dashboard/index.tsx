import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import { Partners, Title, Form, Projects, Container, Hero } from './styles';
import logo from '../../assets/naveapps.svg';
import logoNave from '../../assets/logo_nave.png';
import logoOiFuturo from '../../assets/logo_oi_futuro.png';

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
      <Hero>
        <Container>
          <Partners>
            <img src={logo} alt="NaveApps Logo" />
            <div>
              <img src={logoNave} alt="NAVE" />
              <img src={logoOiFuturo} alt="Oi Futuro" />
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
        </Container>
      </Hero>
      <Container>
        <Projects>
          {projects?.map(project => (
            <Link to={`/projects/${project.name}`} key={project.id}>
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
      </Container>
    </>
  );
};

export default Dashboard;
