export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  TEST: '/test',

  USER: {
    DASHBOARD: '/dashboard',
    PROFILE: '/user/profile',
  },

  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
  },
} as const;
