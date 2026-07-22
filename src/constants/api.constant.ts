export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },

  AI: {
    HEALTH: '/api/health',
    MODELS: '/ai/models',
    CHAT: '/ai/chat',
  },
  
} as const;
