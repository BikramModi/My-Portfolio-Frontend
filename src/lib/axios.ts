import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

import { triggerLogout } from '@/context/authStore';

import { env } from '@/lib/client_env';

interface RetryRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const api: AxiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('API Base URL:', env.NEXT_PUBLIC_API_BASE_URL);

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryRequestConfig;

    if (!error.response || !originalRequest) {
      return Promise.reject(error);
    }

    // Access token expired
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await api.post('/auth/refresh');

        return api(originalRequest);
      } catch (refreshError) {
        triggerLogout();

        return Promise.reject(refreshError);
      }
    }

    // Refresh token expired
    if (error.response.status === 401) {
      triggerLogout();
    }

    return Promise.reject(error);
  }
);

export default api;
