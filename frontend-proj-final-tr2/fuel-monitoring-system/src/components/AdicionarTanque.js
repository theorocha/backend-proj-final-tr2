// src/components/AdicionarTanque.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adicionarTanque } from '../services/api';
import { TextField, Button, Box, Typography, styled } from '@mui/material';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
  },
});

const CustomButton = styled(Button)({
  backgroundColor: '#004080',
  color: '#fff',
  border: '1px solid #004080',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#004080',
    border: '1px solid #004080',
  },
});

const AdicionarTanque = () => {
  const [tanque, setTanque] = useState({
    latitude_loc: '',
    longitude_loc: '',
    capacidade_max: '',
    medida_atual: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTanque((prevTanque) => ({
      ...prevTanque,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarTanque(tanque).then(() => {
      navigate('/');
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '75px', marginTop: '10px'  }}>
        Adicionar Tanque
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: '500px' }}>
        <CustomTextField
          fullWidth
          margin="normal"
          label="Latitude"
          name="latitude_loc"
          value={tanque.latitude_loc}
          onChange={handleChange}
          variant="outlined"
        />
        <CustomTextField
          fullWidth
          margin="normal"
          label="Longitude"
          name="longitude_loc"
          value={tanque.longitude_loc}
          onChange={handleChange}
          variant="outlined"
        />
        <CustomTextField
          fullWidth
          margin="normal"
          label="Capacidade Máxima"
          name="capacidade_max"
          value={tanque.capacidade_max}
          onChange={handleChange}
          variant="outlined"
        />
        <CustomTextField
          fullWidth
          margin="normal"
          label="Medida Atual"
          name="medida_atual"
          value={tanque.medida_atual}
          onChange={handleChange}
          variant="outlined"
        />
        <CustomButton type="submit" fullWidth variant="contained" sx={{ marginTop: '20px' }}>
          Adicionar
        </CustomButton>
      </Box>
    </Box>
  );
};

export default AdicionarTanque;
