import axios from "axios";
import { IUser } from "@/interfaces/User";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const getAllUsers = async (): Promise<IUser[]> => {
    const { data } = await axios.get<IUser[]>(`${API_URL}/users`, {
        withCredentials: true,
    });

    return data;

};

export const getUserByName = async (name: string): Promise<IUser> => {
    const { data } = await axios.get<IUser>(`${API_URL}/users`, {
        params: { name },
        withCredentials: true,
    });

    return data;
};