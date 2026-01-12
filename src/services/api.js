import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

// Create axios instance
const api = axios.create({
  baseURL: API_ENDPOINTS.TASKS.replace('/api/tasks', ''),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle 401 errors (unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: async (userData) => {
    const response = await api.post(API_ENDPOINTS.REGISTER, userData);
    return response.data;
  },
  
  login: async (credentials) => {
    const response = await api.post(API_ENDPOINTS.LOGIN, credentials);
    return response.data;
  },
};

// Tasks API
export const tasksAPI = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.status) params.append('status', filters.status);
    if (filters.priority) params.append('priority', filters.priority);
    if (filters.category) params.append('category', filters.category);
    if (filters.search) params.append('search', filters.search);
    
    const url = params.toString() 
      ? `${API_ENDPOINTS.TASKS}?${params.toString()}`
      : API_ENDPOINTS.TASKS;
    
    const response = await api.get(url);
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(API_ENDPOINTS.TASK_BY_ID(id));
    return response.data;
  },
  
  create: async (taskData) => {
    const response = await api.post(API_ENDPOINTS.TASKS, taskData);
    return response.data;
  },
  
  update: async (id, taskData) => {
    const response = await api.put(API_ENDPOINTS.TASK_BY_ID(id), taskData);
    return response.data;
  },
  
  delete: async (id) => {
    await api.delete(API_ENDPOINTS.TASK_BY_ID(id));
  },
};

export default api;
