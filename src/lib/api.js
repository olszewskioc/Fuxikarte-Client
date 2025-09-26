import axios from 'axios';
import useAuthStore from '../features/auth/authStore';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Interceptor para incluir o token automaticamente
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().userData?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
