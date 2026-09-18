'use client';

import { useState, useEffect } from 'react';
import {
  FaUsers,
  FaMoneyBillWave,
  FaUserCheck,
  FaCalendarAlt,
} from 'react-icons/fa';
import { getAllUsers } from '@/services/UserServices';
import { IUser } from '@/interfaces/User';

const DashboardAdmin = () => {
  const [usuarios, setUsuarios] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await getAllUsers();
        setUsuarios(data);
      } catch {
        setError('No se pudieron cargar los socios');
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  const totalSocios = usuarios.length;
  const sociosActivos = usuarios.filter((u) => u.active).length;

  return (
    <main className="w-full h-full p-8">

      {/* Título */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-primary-text">
          Dashboard
        </h1>

        <p className="text-primary-text/60 mt-2">
          Resumen general del Club Náutico
        </p>
      </section>

      {error && (
        <p className="text-red-600 mb-4">{error}</p>
      )}

      {/* Estadísticas principales */}
      <section className="grid grid-cols-4 gap-5 mb-8">

        {/* Socios */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Socios totales
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {loading ? '---' : totalSocios}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FaUsers className="text-xl text-primary" />
            </div>

          </div>
        </div>


        {/* Socios activos */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Socios activos
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {loading ? '---' : sociosActivos}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <FaUserCheck className="text-xl text-green-600" />
            </div>

          </div>
        </div>


        {/* Pagos */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Pagos este mes
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ---
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <FaMoneyBillWave className="text-xl text-blue-600" />
            </div>

          </div>
        </div>


        {/* Eventos */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Próximos eventos
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ---
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
              <FaCalendarAlt className="text-xl text-yellow-600" />
            </div>

          </div>
        </div>

      </section>

      {/* resto del componente sin cambios */}
    </main>
  );
};

export default DashboardAdmin;