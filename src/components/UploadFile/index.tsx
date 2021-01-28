import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { DropzoneArea, DropzoneAreaBaseProps } from 'material-ui-dropzone';
import { withStyles } from '@material-ui/core/styles';
import { useField } from '@unform/core';

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

interface DropzoneProps {
  name: string;
}

const Dropzone: React.FC<DropzoneProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [signedDocumentName, setSignedDocumentName] = useState(
    'Selecione ou solte o arquivo aqui',
  );
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <DropzoneArea {...rest} />
    </>
  );
};
export default withStyles(styles)(DropzoneArea);
