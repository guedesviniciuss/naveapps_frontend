import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    fontFamily: 'Poppins,sans-serif',
    paddingTop: '25px',
    margin: '25px 0px',
    color: '#9197a9',
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
      <DropzoneArea />
    </form>
  );
};
export default withStyles(styles)(DropzoneArea);
