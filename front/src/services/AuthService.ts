import axios from "axios";
import { IUser } from "@/interfaces/User";
import { IAuthResponse, ILoginData, IRegisterData } from "@/interfaces/Auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const registerUser = async (data: IRegisterData): Promise<IUser> => {
    const { data: response } = await axios.post<IUser>(`${API_URL}/`, data);

    console.log(response)
    return response;
}

export const loginUser = async (data: ILoginData): Promise<IAuthResponse> => {
    const { data: response } = await axios.post<IAuthResponse>(`${API_URL}/auth/login`);
    
    console.log(response);
    return response;
}