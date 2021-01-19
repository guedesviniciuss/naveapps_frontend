import React from 'react';

import { Table as TableAntd, Divider } from 'antd';
import 'antd/dist/antd.css';

interface TableProps {
  columns: object[];
  data: object[];
}

const rowSelection = {
  onChange: ({ selectedRowKeys, selectedRows }: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const Table: React.FC<TableProps> = ({ columns, data }: TableProps) => {
  return (
    <div>
      <Divider />

      <TableAntd
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Table;
