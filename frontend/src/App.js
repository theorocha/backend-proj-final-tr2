// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DetalhesTanque from './components/DetalhesTanque';
import AdicionarTanque from './components/AdicionarTanque';
import NavBar from './components/NavBar';
import ESPStatusPage from './components/ESPStatusPage';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tanque/:id" element={<DetalhesTanque />} />
            <Route path="/adicionar-tanque" element={<AdicionarTanque />} />
            <Route path="/esp-status" element={<ESPStatusPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
