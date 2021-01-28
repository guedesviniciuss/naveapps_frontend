import React, { useState } from 'react';

import { Table as TableAntd, Divider, Button } from 'antd';
import 'antd/dist/antd.css';

import { DelButton, UpdateButton } from './styles';

interface TableProps {
  columns: object[];
  data: object[];
}

interface SelectedRowsData {
  [key: string]: any;
}

const Table: React.FC<TableProps> = ({ columns, data }: TableProps) => {
  return (
    <div>
      <Divider />

      <TableAntd columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default Table;
