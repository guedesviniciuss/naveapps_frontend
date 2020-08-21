import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

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
  const [project, setProject] = useState<Project[]>([]);

  const { params: projectParams } = useRouteMatch<ProjectParams>();

  console.log(projectParams);

  useEffect(() => {
    async function getApiProject(): Promise<void> {
      const response = await api.get<Project[]>('/applications', {
        params: {
          name: projectParams.project,
        },
      });
      setProject([...response.data]);
    }
    getApiProject();
  }, []);

  return <h1>{projectParams.project}</h1>;
};

export default Applications;
