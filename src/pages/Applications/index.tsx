import React, { useEffect, useState, useCallback } from 'react';
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
  Video,
} from './styles';

import logo from '../../assets/naveapps.svg';

import api from '../../services/api';

interface Project {
  id: string;
  name: string;
  summary: string;
  link: string;
  description: string;
  video: string;
  thumbnail: string;
  likes: number;
  gallery: string[];
}

interface ProjectParams {
  project: string;
}

const Applications: React.FC = () => {
  const [application, setApplication] = useState<Project>({} as Project);

  const { params: projectParams } = useRouteMatch<ProjectParams>();
  useEffect(() => {
    async function getApiProject(): Promise<void> {
      const response = await api.get<Project>(
        `/applications/${projectParams.project}`,
      );
      setApplication({ ...response.data });
      console.log(response.data);
    }
    getApiProject();
  }, [projectParams.project]);

  const handleLikeApp = useCallback(
    async (id: string): Promise<void> => {
      await api.post<Project>(`/applications/likes/${id}`);
      setApplication({ ...application, likes: application.likes + 1 });
    },
    [application],
  );

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
              {application.gallery?.map(image => (
                <img src={`http://localhost:3333/${image}`} alt="" />
              ))}
            </Gallery>
            <iframe
              title={application.id}
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/I3tANQpYomM?controls=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <FixedButtons>
              <Button
                typeButton="download"
                href={application.link}
                target="_blank"
              >
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
