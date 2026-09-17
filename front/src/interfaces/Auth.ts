import { Rol } from './User';

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
  mustChangePassword: boolean;
  usuario: {
    id: number;
    name: string;
    dni: number;
    email: string
    rol: Rol;
  };
}

export interface ISolicitarCodigo {
  dni: number,
  email: string
}

export interface ICambiarContraseña {
  dni: number,
  codigo: string,
  nuevaContraseña: string
}