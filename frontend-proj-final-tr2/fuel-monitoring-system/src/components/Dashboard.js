// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { listarTanques } from '../services/api';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system';
import IconeBarril from './IconeBarril';
import { Link } from 'react-router-dom';

const AnimatedCard = styled(Card)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  }
});

const DetalhesLink = styled(Link)({
  textDecoration: 'underline',
  color: 'black',
  cursor: 'pointer',
  '&:hover': {
    color: 'black'
  }
});

const Dashboard = () => {
  const [tanques, setTanques] = useState([]);

  useEffect(() => {
    listarTanques().then(response => {
      setTanques(response.data);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '100px', marginTop: '25px'  }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {tanques.map(tanque => (
          <Grid item key={tanque.id} xs={12} sm={6} md={4} lg={3}>
            <AnimatedCard>
              <CardContent style={{ textAlign: 'center' }}>
                <IconeBarril capacidade_max={tanque.capacidade_max} medida_atual={tanque.medida_atual} />
                <Typography variant="body1">
                  <strong>ID do Tanque: {tanque.id}</strong>
                </Typography>
                <DetalhesLink to={`/tanque/${tanque.id}`}>
                  Mais Detalhes
                </DetalhesLink>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
