// src/components/HistoricoDados.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoricoDados = () => {

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Histórico de Dados
      </Typography>
      <Line data={data} />
    </Box>
  );
};

export default HistoricoDados;
