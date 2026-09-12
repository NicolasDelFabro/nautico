export type Rol = 'socio' | 'tesorero' | 'presidente' | 'admin';

export interface IUser {
  id: number;
  name: string;
  dni: number;
  birthdate: string;
  address: string;
  phone: string;
  email: string;
  active: boolean;
  rol: Rol;
  verificationCode: string | null;
  verificationCodeExpiresAt: string | null;
  mustChangePassword: boolean;
}