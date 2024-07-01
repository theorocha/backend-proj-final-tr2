// src/components/DetalhesTanque.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listarTanquePorId } from '../services/api';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconeBarril from './IconeBarril';
import Map from './Map';
import Box from '@mui/material/Box';

const DetalhesTanque = () => {
  const { id } = useParams();
  const [tanque, setTanque] = useState(null);

  useEffect(() => {
    listarTanquePorId(id).then(response => {
      setTanque(response.data);
    });
  }, [id]);

  if (!tanque) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '100px', marginTop: '25px'  }}>
        Detalhes do Tanque {tanque.id}
      </Typography>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconeBarril capacidade_max={tanque.capacidade_max} medida_atual={tanque.medida_atual} />
            <Typography variant="body1">
              Nível: {tanque.medida_atual} / {tanque.capacidade_max}
            </Typography>
            <Typography variant="body1">
              Localização: Latitude {tanque.latitude_loc}, Longitude {tanque.longitude_loc}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ border: '2px solid black', borderRadius: '10px', overflow: 'hidden' }}>
            <Map latitude={tanque.latitude_loc} longitude={tanque.longitude_loc} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetalhesTanque;
