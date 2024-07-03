// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#004080', marginBottom: '20px' }}>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ width: '200px', marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ marginRight: '10px' }}>
          |
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Monitoramento de Tanques
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/adicionar-tanque">Adicionar Tanque</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
