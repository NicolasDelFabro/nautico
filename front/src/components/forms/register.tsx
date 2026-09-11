// components/RegisterForm.tsx
'use client';

import { useState } from 'react';
import axios from 'axios';
import { IRegisterData } from '@/interfaces/Auth';
import { registerUser } from '@/services/AuthService';

const initialForm: IRegisterData = {
  name: '',
  dni: 0,
  birthdate: '',
  address: '',
  phone: '',
  email: '',
  password: '',
  rol: 'socio',
};

const RegisterForm = () => {
  const [form, setForm] = useState<IRegisterData>(initialForm);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'dni' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setSuccess(false);
    setLoading(true);

    try {
      await registerUser(form);
      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const mensaje = err.response?.data?.message;
        setErrors(Array.isArray(mensaje) ? mensaje : [mensaje ?? 'Error al registrar el socio']);
      } else {
        setErrors(['Error inesperado']);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        name="name"
        placeholder="Nombre completo"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="dni"
        type="number"
        placeholder="DNI"
        value={form.dni || ''}
        onChange={handleChange}
        required
      />

      <input
        name="birthdate"
        placeholder="Fecha de nacimiento (DD/MM/AAAA)"
        value={form.birthdate}
        onChange={handleChange}
        required
      />

      <input
        name="address"
        placeholder="Dirección"
        value={form.address}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Contraseña temporal"
        value={form.password}
        onChange={handleChange}
        required
        minLength={6}
      />

      {errors.length > 0 && (
        <ul className="text-red-600 text-sm">
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}

      {success && (
        <p className="text-green-600 text-sm">Socio registrado correctamente.</p>
      )}

      <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrar socio'}
      </button>
    </form>
  );
};

export default RegisterForm;