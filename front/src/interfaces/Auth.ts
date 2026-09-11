import { Rol } from "./User"

export interface IRegisterData {
  name: string;
  dni: number;
  birthdate: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  rol: Rol;
}

export interface ILoginData {
  dni: number;
  password: string;
}

export interface IAuthResponse {
  access_token: string;
  mustChangePassword: boolean;
  usuario: {
    id: number;
    name: string;
    dni: number;
    rol: Rol;
  };
}