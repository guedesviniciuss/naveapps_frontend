import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FiHeart, FiDownload, FiChevronLeft } from 'react-icons/fi';

import {
  Container,
  Header,
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

import api from '../../services/api';

interface Project {
  id: string;
  name: string;
  summary: string;
  description: string;
  thumbnail: string;
  likes: number;
  gallery: string[];
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
  console.log(application);

  return (
    <>
      <Container>
        <Header>
          <Link to="/">
            <FiChevronLeft />
            <span>Voltar</span>
          </Link>
          <img src={logo} alt="NaveApps Logo" />
        </Header>
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
              {application.gallery.map(image => (
                <img src={`http://localhost:3333/${image}`} alt="" />
              ))}
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
