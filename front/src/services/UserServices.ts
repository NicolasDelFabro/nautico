import axios from "axios";
import { IUser, ICreateUser, IEditUser } from "@/interfaces/User";

const API_URL = 'http://localhost:3000';

export const createUser = async (user: ICreateUser): Promise<IUser> => {
    const response = await axios.post(`${API_URL}/users`, user, {
        withCredentials: true,
    });
    return response.data;
};

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

export const editUser = async (id: number, data: IEditUser): Promise<IUser> => {
    const response = await axios.patch(`${API_URL}/users/${id}`, data);

    return response.data;
}