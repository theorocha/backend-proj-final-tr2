import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

export const listarTanques = () => api.get('/tanque');
export const listarTanquePorId = (id) => api.get(`/tanque/${id}`);
export const adicionarTanque = (tanque) => api.post('/tanque', tanque);
export const removerTanquePorIdData = (id, data) => api.delete(`/tanque/${id}/${data}`);

export default api;
