import styled from 'styled-components';

import { Button, Table } from 'antd';

export const DelButton = styled(Button)`
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const UpdateButton = styled(Button)`
  width: 42px;
  height: 28px;
  justify-content: center;
  border: 0px;
  border-radius: 5px 5px 5px 5px;
  color: #fff;

  font-weight: bold;
  transition: background-color 0.2s;
  background: none;
  color: inherit;

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;
