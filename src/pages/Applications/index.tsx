import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import { Container, Header, Partners, Project } from './styles';
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

interface ProjectParams {
  project: string;
}

const Applications: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);

  const { params: projectParams } = useRouteMatch<ProjectParams>();

  useEffect(() => {
    async function getApiProject(): Promise<void> {
      const response = await api.get<Project>(
        `/applications/${projectParams.project}`,
      );
      console.log(response.data);
      setProject({ ...response.data });
    }
    getApiProject();
  }, [projectParams.project]);

  return (
    <>
      <Container>
        <Header>
          <Partners>
            <img src={logo} alt="NaveApps Logo" />
            <div>
              <img src={logoNave} alt="NAVE" />
              <img src={logoOiFuturo} alt="Oi Futuro" />
            </div>
          </Partners>
        </Header>
        <Project>
          <img src={`http://localhost:3333/${project?.thumbnail}`} alt="" />
          <strong>aplicativo</strong>
          <h2>Apocadino</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of
          </p>
          <div>
            <FaHeart size={15} />
            <p>{project?.likes}</p>
          </div>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div>
            <img src="https://dummyimage.com/400x400/d134d1/ffffff" alt="" />
            <img src="https://dummyimage.com/400x400/d134d1/ffffff" alt="" />
            <img src="https://dummyimage.com/400x400/d134d1/ffffff" alt="" />
          </div>
        </Project>
      </Container>
    </>
  );
};

export default Applications;
