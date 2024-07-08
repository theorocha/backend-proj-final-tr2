import React, { useEffect, useState } from 'react';
import { getESPStatus } from '../services/api';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ESPStatusPage = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getESPStatus().then(response => {
      setStatus(response.data);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '50px', marginTop: '25px' }}>
        Status das ESPs
      </Typography>
      <Grid container spacing={3}>
        {status.map(s => (
          <Grid item key={s.tanque_id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Tanque ID: {s.tanque_id}
                </Typography>
                <Typography variant="body1">
                  RSSI: {s.rssi}
                </Typography>
                <Typography variant="body1">
                  Perda de Pacote: {s.packet_loss}%
                </Typography>
                <Typography variant="body1">
                  Tempo Ligado: {s.uptime} horas
                </Typography>
                <Typography variant="body1">
                  Última Atualização: {new Date(s.last_updated).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ESPStatusPage;
