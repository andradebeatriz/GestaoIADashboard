import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getUsers = () => api.get('/usuarios');
export const createUser = (userData) => api.post('/usuarios', userData);