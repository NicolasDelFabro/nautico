// components/CambiarPasswordModal.tsx
'use client';

import { useState } from 'react';
import axios from 'axios';
import { cambiarPassword } from '@/services/AuthService';

interface Props {
  dni: number;
  onClose: () => void;
  onSuccess: () => void;
}

const CambiarPasswordModal = ({ dni, onClose, onSuccess }: Props) => {
  const [codigo, setCodigo] = useState('');
  const [nuevaContraseña, setNuevaContraseña] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await cambiarPassword({ dni, codigo, nuevaContraseña });
      onSuccess();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? 'Código o contraseña inválidos');
      } else {
        setError('Error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center">Ingresá el código</h2>
        <p className="text-sm text-center text-slate-500 mt-2">
          Revisá tu email, te enviamos un código de 6 dígitos.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input
            type="text"
            placeholder="Código de 6 dígitos"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            maxLength={6}
            required
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          <input
            type="password"
            placeholder="Nueva contraseña"
            value={nuevaContraseña}
            onChange={(e) => setNuevaContraseña(e.target.value)}
            minLength={6}
            required
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white rounded-xl py-3 font-semibold disabled:opacity-60"
          >
            {loading ? 'Confirmando...' : 'Confirmar cambio'}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-sm text-slate-500 underline"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CambiarPasswordModal;