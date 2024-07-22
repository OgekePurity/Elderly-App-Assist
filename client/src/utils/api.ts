import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (data: { email: string; password: string }) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const register = async (data: { email: string; password: string; name: string }) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const addMedication = async (data: { name: string; dosage: string; frequency: string }) => {
  const response = await api.post('/medications', data);
  return response.data;
};

export const getMedications = async () => {
  const response = await api.get('/medications');
  return response.data;
};

export default api;
