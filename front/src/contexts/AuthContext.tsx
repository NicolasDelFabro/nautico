// contexts/AuthContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentUser, logoutUser } from '@/services/AuthService';
import { IAuthResponse } from '@/interfaces/Auth';

type UsuarioSesion = IAuthResponse['usuario'] | null;

interface AuthContextType {
  usuario: UsuarioSesion;
  isAuthenticated: boolean;
  loading: boolean;
  setUsuario: (usuario: UsuarioSesion) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<UsuarioSesion>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await getCurrentUser();
        setUsuario(data);
      } catch {
        setUsuario(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const logout = async () => {
    await logoutUser();
    setUsuario(null);
  };

  return (
    <AuthContext.Provider
      value={{ usuario, isAuthenticated: !!usuario, loading, setUsuario, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};