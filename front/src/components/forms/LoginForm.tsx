// components/LoginForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { loginUser } from '@/services/AuthService';
import { useAuth } from '@/contexts/AuthContext';
import { ILoginData } from '@/interfaces/Auth';

const initialForm: ILoginData = {
  dni: 0,
  password: '',
};

const LoginForm = () => {
  const [form, setForm] = useState<ILoginData>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { setUsuario } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'dni' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await loginUser(form);
      setUsuario(data.usuario);

      if (data.mustChangePassword) {
        router.push('/password-change');
      } else if (data.usuario.rol === "admin" || data.usuario.rol === 'presidente' || data.usuario.rol === 'tesorero') {
        router.push('/dashboard/admin');
      } else ('/dashboard')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? 'Error al iniciar sesión');
      } else {
        setError('Error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <label htmlFor="DNI">
        Documento:
      </label>
      <input
        name="dni"
        type="number"
        placeholder="DNI"
        className='bg-background px-2 py-1 rounded-lg'
        value={form.dni || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="Contraseña">
        Contraseña: 
      </label>
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        className="bg-background px-2 py-1 rounded-lg"
        value={form.password}
        onChange={handleChange}
        required
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button type="submit" disabled={loading}
      className="font-semibold border-1 border-primary rounded-lg py-2 hover:border-1 hover:border-terciario hover:bg-primary hover:text-text-secundary">
        {loading ? 'Ingresando...' : 'Iniciar sesión'}
      </button>
    </form>
  );
};

export default LoginForm;