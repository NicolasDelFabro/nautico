'use client';

import Link from 'next/link';
import { FaLock } from 'react-icons/fa';

const Unauthorized = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center text-center max-w-md">

        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-text/10 mb-6">
          <FaLock className="text-3xl text-primary-text" />
        </div>

        <span className="text-7xl font-bold text-primary-text/20">
          403
        </span>

        <h1 className="text-3xl font-bold text-primary-text mt-2">
          Acceso no autorizado
        </h1>

        <p className="text-primary-text/70 mt-4 leading-relaxed">
          No tenés los permisos necesarios para acceder a esta sección.
          Si creés que deberías tener acceso, contactá con la administración
          del club.
        </p>

        <Link
          href="/login"
          className="mt-8 px-6 py-3 rounded-xl bg-primary-text text-white font-semibold
                     hover:opacity-90 transition-opacity"
        >
          Inciar sesion
        </Link>

      </div>
    </main>
  );
};

export default Unauthorized;