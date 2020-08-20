import React, { useEffect, useState } from 'react';
import api from './services/api';

interface Application {
  name: string;
}

const App: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    api.get('/applications').then(response => {
      return setApplications(response.data);
    });
  }, []);

  return (
    <>
      <h1>hello world</h1>
      {applications &&
        applications.map(application => <h1>{application.name}</h1>)}
    </>
  );
};

export default App;
