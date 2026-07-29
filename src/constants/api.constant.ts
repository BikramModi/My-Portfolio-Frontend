export const API_ENDPOINTS = {
 AUTH: {
  REGISTER: '/auth/register',
  VERIFY_EMAIL: '/auth/verify-email',
  RESEND_OTP: '/auth/resend-otp',

  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',

  FORGOT_PASSWORD: '/auth/forgot-password',
  VERIFY_RESET_OTP: '/auth/verify-reset-otp',
  RESET_PASSWORD: '/auth/reset-password',
},

  AI: {
    HEALTH: '/api/health',
    MODELS: '/ai/models',
    CHAT: '/ai/chat',
  },
  
} as const;
