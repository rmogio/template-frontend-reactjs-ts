import axios from 'axios';

const door = 3335;

const api = axios.create({
  baseURL: `http://localhost:${door}`,
});

export default api;
