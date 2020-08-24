import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, TableContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Criado</th>
                <th>Atualizado</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="title">Computer</td>
                <td className="income">R$ 5.000,00</td>
                <td>Sell</td>
                <td>20/04/2020</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
