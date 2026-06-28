import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api.constant";
import {
  LoginRequest,
  RegisterRequest,
} from "@/types/auth.type";

export const registerUser = async (data: RegisterRequest) => {
  const response = await api.post(
    API_ENDPOINTS.AUTH.REGISTER,
    data
  );

  return response.data;
};

export const loginUser = async (data: LoginRequest) => {
  const response = await api.post(
    API_ENDPOINTS.AUTH.LOGIN,
    data
  );

  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post(
    API_ENDPOINTS.AUTH.LOGOUT
  );

  return response.data;
};

export const refreshToken = async () => {
  const response = await api.post(
    API_ENDPOINTS.AUTH.REFRESH
  );

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get(
    API_ENDPOINTS.AUTH.ME
  );

  return response.data;
};