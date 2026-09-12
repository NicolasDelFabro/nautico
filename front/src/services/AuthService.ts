import axios from 'axios';
import { IUser } from '@/interfaces/User';
import { IAuthResponse, ILoginData, IRegisterData } from '@/interfaces/Auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const registerUser = async (data: IRegisterData): Promise<IUser> => {
  const { data: response } = await axios.post<IUser>(`${API_URL}/users`, data, {
    withCredentials: true,
  });
  return response;
};

export const loginUser = async (data: ILoginData): Promise<IAuthResponse> => {
  const { data: response } = await axios.post<IAuthResponse>(
    `${API_URL}/auth/login`,
    data,
    { withCredentials: true },
  );
  return response;
};

export const logoutUser = async (): Promise<void> => {
  await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
};

export const getCurrentUser = async () => {
  const { data } = await axios.get(`${API_URL}/auth/me`, {
    withCredentials: true,
  });
  return data;
};