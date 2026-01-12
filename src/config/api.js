// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://task-management-api-production-96e5.up.railway.app';

export const API_ENDPOINTS = {
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  TASKS: `${API_BASE_URL}/api/tasks`,
  TASK_BY_ID: (id) => `${API_BASE_URL}/api/tasks/${id}`,
};
