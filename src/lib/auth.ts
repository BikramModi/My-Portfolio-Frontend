import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api.constant";

export interface CurrentUser {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  profileImage?: string;
}

export async function getCurrentUser(
  cookie: string
): Promise<CurrentUser | null> {
  try {
    const response = await api.get(API_ENDPOINTS.AUTH.ME, {
      headers: {
        Cookie: cookie,
      },
    });

    return response.data.user;
  } catch {
    return null;
  }
}