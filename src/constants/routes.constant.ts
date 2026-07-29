export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',

  VERIFY_EMAIL: '/verify-email',

  FORGOT_PASSWORD: '/forgot-password',

  VERIFY_RESET_OTP: '/verify-reset-otp',

  RESET_PASSWORD: '/reset-password',

  TEST: '/test',
  AI: '/gen-ai',

  USER: {
    DASHBOARD: '/dashboard',
    PROFILE: '/user/profile',
  },

  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
  },
} as const;
