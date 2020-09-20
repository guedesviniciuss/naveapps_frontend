import React, { useCallback, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '25px',
    margin: '25px 0px',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
};

const Dropzone: React.FC = () => {
  const [signedDocumentName, setSignedDocumentName] = useState(
    'Selecione ou solte o arquivo aqui',
  );
  return (
    <form>
      <DropzoneArea
        dropzoneText={signedDocumentName}
        getFileAddedMessage={
          (fileName: string) => `Documento ${fileName} adicionado com sucesso.`
          // eslint-disable-next-line react/jsx-curly-newline
        }
        getFileRemovedMessage={(fileName: string) =>
          // eslint-disable-next-line prettier/prettier
          `Documento ${fileName} removido com sucesso.`}
        getFileLimitExceedMessage={(fileName: number) =>
          // eslint-disable-next-line prettier/prettier
          `O documento ${fileName} atingiu o limite permitido.`}
        filesLimit={1}
        acceptedFiles={['.jpg', '.png']}
      />
    </form>
  );
};
export default withStyles(styles)(DropzoneArea);
