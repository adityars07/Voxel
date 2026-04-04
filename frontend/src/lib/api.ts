import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to attach JWT token
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const projectApi = {
  getAll: () => api.get('/projects'),
  create: (title: string) => api.post('/projects', { title }),
  updateScene: (projectId: string, sceneData: any) => api.put(`/projects/${projectId}/scene`, { sceneData }),
  exportCode: (projectId: string) => api.get(`/projects/${projectId}/export`),
};

export const authApi = {
  register: (data: any) => api.post('/auth/register', data),
  login: (data: any) => api.post('/auth/login', data),
};

export default api;
