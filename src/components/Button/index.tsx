import React, { ButtonHTMLAttributes } from 'react';
import { Spin } from 'antd';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <Spin /> : children}
  </Container>
);

export default Button;
