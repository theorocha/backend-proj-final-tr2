// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

export const listarTanques = () => api.get('/tanque');
export const listarTanquePorId = (id) => api.get(`/tanque/${id}`);
export const adicionarTanque = (tanque) => api.post('/tanque', tanque);
export const removerTanquePorId = (id) => api.delete(`/tanque/${id}`);

export default api;
