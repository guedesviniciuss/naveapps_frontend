import React, { useState, useRef, useCallback, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Form } from '@unform/web';
import { Redirect, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { DropzoneArea } from 'material-ui-dropzone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiPlus, FiLoader } from 'react-icons/fi';

import { Paper, Title, Avatar, CheckIcon, Button } from './styles';

import api from '../../services/api';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Header from '../../components/Header';
import Dropzone from '../../components/UploadFile';
import getValidationErrors from '../../utils/getValidationErrors';
import Thumbnail from '../../components/UploadThumb';
import { useAuth } from '../../hooks/auth';

interface CreateAppFormData {
  name: string;
  summary: string;
  description: string;
  downloadLink: string;
  video: string;
}

interface Project {
  id: string;
  name: string;
  summary: string;
  description: string;
  thumbnail: string;
  likes: number;
}

const Sign: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { token } = useAuth();
  const [signedDocumentName, setSignedDocumentName] = useState(
    'Selecione ou solte o arquivo aqui',
  );
  const [signedDocument, setSignedDocument] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [verifyAnalysis, setVerifyAnalysis] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [projects, setProjects] = useState<Project>();
  const notify = (err: any): any => toast.error(err);

  const handleUploadSignedDocument = (fileAdded: any): any => {
    if (fileAdded[0]) {
      setSignedDocument(fileAdded);
      setSignedDocumentName(fileAdded.name);
    }
  };

  const handleRemoveSignedDocument = (): void => {
    setSignedDocumentName('Selecione ou solte o arquivo aqui');
    setSignedDocument('');
  };

  useEffect(() => {
    async function getApiProjects(): Promise<void> {
      const response = await api.get<Project>('/applications');
      setProjects(response.data);
    }
    getApiProjects();
  }, []);

  const handleSubmit = async (
    formResponse: CreateAppFormData,
  ): Promise<any> => {
    setLoading(true);
    const data = new FormData();
    data.append('thumbnail', signedDocument[0]);
    data.append('gallery', signedDocument[1]);
    data.append('gallery', signedDocument[2]);
    data.append('gallery', signedDocument[3]);
    data.append('name', formResponse.name);
    data.append('summary', formResponse.summary);
    data.append('description', formResponse.description);
    data.append('link', formResponse.downloadLink);
    data.append('video', formResponse.video);
    try {
      const res = await api.post('/applications', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
        timeout: 10000,
      });
      const resVerify = res.data;
      setVerifyAnalysis(resVerify);
      setRedirect(true);
      history.push('/login');
    } catch (err) {
      notify(
        'Ocorreu um erro conectar ao nosso servidor, verifique a sua internet e tente novamente',
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Paper>
        <Typography component="h1" variant="h5">
          Cadastre seu aplicativo
        </Typography>
        <Form onSubmit={handleSubmit} noValidate>
          <>
            <DropzoneArea
              dropzoneText={signedDocumentName}
              getFileAddedMessage={fileName =>
                `Foto ${fileName} adicionada com sucesso.`}
              getFileRemovedMessage={fileName =>
                `Foto ${fileName} removida com sucesso.`}
              getFileLimitExceedMessage={fileName =>
                `A foto ${fileName} atingiu o limite permitido.`}
              filesLimit={4}
              onChange={handleUploadSignedDocument}
              onDelete={handleRemoveSignedDocument}
              acceptedFiles={['.jpg', '.png']}
            />
          </>

          <Input name="name" type="text" id="Nome" placeholder="Nome" />
          <Input
            name="summary"
            type="text"
            id="summary"
            placeholder="Sumario"
          />
          <TextArea
            id="description"
            name="description"
            placeholder="Descricao"
            rows={4}
            cols={20}
          />
          <Input
            name="downloadLink"
            type="text"
            id="link"
            placeholder="Link para Download"
          />
          <Input
            name="video"
            type="text"
            id="video"
            placeholder="Link do Video"
          />
          <button type="submit">Enviar</button>
        </Form>
      </Paper>
      <ToastContainer />
    </>
  );
};

export default Sign;
