'use client';

import Link from 'next/link';
import { FaCompass } from 'react-icons/fa';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center text-center max-w-md">

        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-text/10 mb-6">
          <FaCompass className="text-3xl text-primary-text" />
        </div>

        <span className="text-7xl font-bold text-primary-text/20">
          404
        </span>

        <h1 className="text-3xl font-bold text-primary-text mt-2">
          Página no encontrada
        </h1>

        <p className="text-primary-text/70 mt-4 leading-relaxed">
          La página que estás buscando no existe o puede haber sido
          movida a otra ubicación.
        </p>

        <Link
          href="/"
          className="mt-8 px-6 py-3 rounded-xl bg-primary-text text-white font-semibold
                     hover:opacity-90 transition-opacity"
        >
          Volver al inicio
        </Link>

      </div>
    </main>
  );
};

export default NotFound;