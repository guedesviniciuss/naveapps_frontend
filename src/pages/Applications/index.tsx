import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FiHeart, FiDownload } from 'react-icons/fi';

import {
  Container,
  Partners,
  Main,
  Hero,
  Project,
  Title,
  LikedInfo,
  Button,
  FixedButtons,
  Gallery,
  Description,
} from './styles';
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
  const [application, setApplication] = useState<Project | null>(null);

  const { params: projectParams } = useRouteMatch<ProjectParams>();

  useEffect(() => {
    async function getApiProject(): Promise<void> {
      const response = await api.get<Project>(
        `/applications/${projectParams.project}`,
      );
      console.log(response.data);
      setApplication({ ...response.data });
    }
    getApiProject();
  }, [projectParams.project]);

  async function handleLikeApp(id: string): Promise<void> {
    await api.post(`/applications/likes/${id}`);
  }

  return (
    <>
      <Container>
        <p>Voltar</p>
        <Partners>
          <img src={logo} alt="NaveApps Logo" />
          <div>
            <img src={logoNave} alt="NAVE" />
            <img src={logoOiFuturo} alt="Oi Futuro" />
          </div>
        </Partners>
        {!application ? null : (
          <Project>
            <Hero />
            <Main>
              <div>
                <Title>{application.name}</Title>
                <LikedInfo>
                  <FaHeart size={15} />
                  <p>{application?.likes}</p>
                </LikedInfo>
              </div>
              <p>{application.summary}</p>
            </Main>
            <hr />
            <Description>
              <h1>Descrição</h1>
              <p>{application.description}</p>
            </Description>
            <Gallery>
              <img src="https://dummyimage.com/400x400/d134d1/ffffff" alt="" />
              <img src="https://dummyimage.com/400x400/d134d1/ffffff" alt="" />
              <img src="https://dummyimage.com/400x400/d134d1/ffffff" alt="" />
            </Gallery>
            <FixedButtons>
              <Button type="button" typeButton="download">
                <FiDownload size={25} />
              </Button>
              <Button
                type="button"
                typeButton="like"
                onClick={() => handleLikeApp(application.id)}
              >
                <FiHeart size={25} />
              </Button>
            </FixedButtons>
          </Project>
        )}
      </Container>
    </>
  );
};

export default Applications;
