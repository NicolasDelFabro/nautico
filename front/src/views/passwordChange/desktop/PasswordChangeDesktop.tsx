// app/cambiar-password/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';
import { solicitarCodigo } from '@/services/AuthService';
import CambiarPasswordModal from '@/components/modales/CambiarContraseña';

const rutaPorRol: Record<string, string> = {
  admin: '/admin',
  presidente: '/admin',
  tesorero: '/tesoreria',
  socio: '/dashboard',
};

const PasswordChangeDesktop = () => {
  const { usuario } = useAuth();
  const router = useRouter();

  const [enviado, setEnviado] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!usuario) return null; // o un loader, mientras el AuthContext resuelve la sesión

  const handleEnviarCodigo = async () => {
    setError(null);
    setLoading(true);

    try {
      await solicitarCodigo({ dni: usuario.dni, email: usuario.email });
      setEnviado(true);
      setModalAbierto(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? 'No se pudo enviar el código');
      } else {
        setError('Error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSuccess = () => {
    setModalAbierto(false);
    router.push(rutaPorRol[usuario.rol] ?? '/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-2xl font-bold">Necesitás cambiar tu contraseña</h1>
      <p className="mt-3 text-slate-600 max-w-md">
        Tu contraseña actual es temporal. Por seguridad, tenés que definir una
        nueva antes de continuar.
      </p>

      {error && <p className="text-red-600 text-sm mt-4">{error}</p>}

      <button
        onClick={handleEnviarCodigo}
        disabled={loading}
        className="mt-8 bg-primary text-white rounded-xl px-8 py-3 font-semibold disabled:opacity-60"
      >
        {loading ? 'Enviando...' : enviado ? 'Reenviar código' : 'Enviar código a mi email'}
      </button>

      {modalAbierto && (
        <CambiarPasswordModal
          dni={usuario.dni}
          onClose={() => setModalAbierto(false)}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
};

export default PasswordChangeDesktop;