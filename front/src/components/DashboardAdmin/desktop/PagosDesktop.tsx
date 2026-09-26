"use client";

import { useState } from "react";
import {
    FaPlus,
    FaSearch,
    FaMoneyBillWave,
    FaReceipt,
    FaUsers,
    FaEye,
    FaTimes,
} from "react-icons/fa";

const pagosMock = [
    {
        id: 1,
        socio: "Juan Pérez",
        dni: 40123456,
        fecha: "20/09/2026",
        monto: 15000,
        estado: "Pagado",
        registradoPor: "Administrador",
        concepto: "Cuota septiembre",
    },
    {
        id: 2,
        socio: "Ana Gómez",
        dni: 38765432,
        fecha: "18/09/2026",
        monto: 15000,
        estado: "Pagado",
        registradoPor: "Tesorero",
        concepto: "Cuota septiembre",
    },
    {
        id: 3,
        socio: "Pedro Díaz",
        dni: 42111222,
        fecha: "15/09/2026",
        monto: 15000,
        estado: "Pagado",
        registradoPor: "Tesorero",
        concepto: "Cuota septiembre",
    },
];

const PagosDesktop = () => {

    const [busqueda, setBusqueda] = useState("");

    const [mostrarFormulario, setMostrarFormulario] =
        useState(false);

    const [pagoSeleccionado, setPagoSeleccionado] =
        useState<(typeof pagosMock)[0] | null>(null);

    // ==============================
    // FILTRADO
    // ==============================

    const pagosFiltrados = pagosMock.filter((pago) => {

        const texto = busqueda.toLowerCase();

        return (
            pago.socio.toLowerCase().includes(texto) ||
            pago.dni.toString().includes(busqueda)
        );
    });

    // ==============================
    // HANDLER REGISTRAR PAGO
    // ==============================

    const handleRegistrarPago = (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        // Acá posteriormente llamaremos al servicio:
        // await createPayment(...)

        console.log("Registrar nuevo pago");

        setMostrarFormulario(false);
    };

    return (

        <section className="w-full min-h-full p-8">

            {/* ================= HEADER ================= */}

            <div className="flex justify-between items-center mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-primary-text">
                        Pagos
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Administración e historial de pagos
                    </p>
                </div>

                <button
                    onClick={() => setMostrarFormulario(true)}
                    className="flex items-center gap-2 bg-primary text-background px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                    <FaPlus />

                    Registrar pago
                </button>

            </div>

            {/* ================= RESUMEN ================= */}

            <div className="grid grid-cols-3 gap-5 mb-8">

                <div className="bg-white rounded-2xl p-6 shadow-sm">

                    <div className="flex justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                Recaudado este mes
                            </p>

                            <p className="text-2xl font-bold mt-2">
                                $120.000
                            </p>
                        </div>

                        <FaMoneyBillWave className="text-2xl text-primary" />

                    </div>

                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">

                    <div className="flex justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                Pagos este mes
                            </p>

                            <p className="text-2xl font-bold mt-2">
                                28
                            </p>
                        </div>

                        <FaReceipt className="text-2xl text-primary" />

                    </div>

                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">

                    <div className="flex justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                Socios al día
                            </p>

                            <p className="text-2xl font-bold mt-2">
                                32
                            </p>
                        </div>

                        <FaUsers className="text-2xl text-primary" />

                    </div>

                </div>

            </div>

            {/* ================= HISTORIAL ================= */}

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                <div className="p-6 border-b border-gray-100">

                    <h2 className="text-xl font-bold mb-4">
                        Historial de pagos
                    </h2>

                    <div className="relative">

                        <FaSearch
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Buscar por socio o DNI..."
                            value={busqueda}
                            onChange={(e) =>
                                setBusqueda(e.target.value)
                            }
                            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-primary"
                        />

                    </div>

                </div>

                {/* ================= TABLA ================= */}

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="text-left px-6 py-4">
                                Socio
                            </th>

                            <th className="text-left px-6 py-4">
                                Fecha
                            </th>

                            <th className="text-left px-6 py-4">
                                Concepto
                            </th>

                            <th className="text-left px-6 py-4">
                                Monto
                            </th>

                            <th className="text-left px-6 py-4">
                                Estado
                            </th>

                            <th className="text-center px-6 py-4">
                                Detalle
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {pagosFiltrados.map((pago) => (

                            <tr
                                key={pago.id}
                                className="border-t border-gray-100 hover:bg-gray-50 transition"
                            >

                                <td className="px-6 py-4">

                                    <p className="font-semibold">
                                        {pago.socio}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        DNI {pago.dni}
                                    </p>

                                </td>

                                <td className="px-6 py-4">
                                    {pago.fecha}
                                </td>

                                <td className="px-6 py-4">
                                    {pago.concepto}
                                </td>

                                <td className="px-6 py-4 font-semibold">
                                    ${pago.monto.toLocaleString("es-AR")}
                                </td>

                                <td className="px-6 py-4">

                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                        {pago.estado}
                                    </span>

                                </td>

                                <td className="px-6 py-4 text-center">

                                    <button
                                        onClick={() =>
                                            setPagoSeleccionado(pago)
                                        }
                                        className="text-primary hover:opacity-70"
                                        title="Ver detalle"
                                    >
                                        <FaEye />
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* ============== MODAL NUEVO PAGO ============== */}

            {mostrarFormulario && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

                    <div className="bg-white w-full max-w-lg rounded-2xl p-7">

                        <div className="flex justify-between items-center mb-6">

                            <div>
                                <h2 className="text-2xl font-bold">
                                    Registrar pago
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Ingresá los datos del pago
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    setMostrarFormulario(false)
                                }
                            >
                                <FaTimes />
                            </button>

                        </div>

                        <form
                            onSubmit={handleRegistrarPago}
                            className="flex flex-col gap-4"
                        >

                            <div>
                                <label className="text-sm font-semibold">
                                    DNI del socio
                                </label>

                                <input
                                    type="number"
                                    placeholder="Ej: 40123456"
                                    required
                                    className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Monto
                                </label>

                                <input
                                    type="number"
                                    placeholder="$"
                                    required
                                    className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Fecha
                                </label>

                                <input
                                    type="date"
                                    required
                                    className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Concepto
                                </label>

                                <input
                                    type="text"
                                    placeholder="Ej: Cuota septiembre"
                                    required
                                    className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
                                />
                            </div>

                            <div className="flex justify-end gap-3 mt-4">

                                <button
                                    type="button"
                                    onClick={() =>
                                        setMostrarFormulario(false)
                                    }
                                    className="px-5 py-3 border rounded-xl font-semibold"
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    className="px-5 py-3 bg-primary text-background rounded-xl font-semibold"
                                >
                                    Registrar pago
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

            {/* ============== DETALLE DEL PAGO ============== */}

            {pagoSeleccionado && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

                    <div className="bg-white w-full max-w-md rounded-2xl p-7">

                        <div className="flex justify-between items-center mb-6">

                            <h2 className="text-2xl font-bold">
                                Detalle del pago
                            </h2>

                            <button
                                onClick={() =>
                                    setPagoSeleccionado(null)
                                }
                            >
                                <FaTimes />
                            </button>

                        </div>

                        <div className="flex flex-col gap-4">

                            <div>
                                <p className="text-sm text-gray-400">
                                    Socio
                                </p>

                                <p className="font-semibold">
                                    {pagoSeleccionado.socio}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    DNI
                                </p>

                                <p>
                                    {pagoSeleccionado.dni}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Fecha
                                </p>

                                <p>
                                    {pagoSeleccionado.fecha}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Concepto
                                </p>

                                <p>
                                    {pagoSeleccionado.concepto}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Monto
                                </p>

                                <p className="text-xl font-bold">
                                    $
                                    {pagoSeleccionado.monto.toLocaleString(
                                        "es-AR"
                                    )}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Registrado por
                                </p>

                                <p>
                                    {pagoSeleccionado.registradoPor}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Estado
                                </p>

                                <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                    {pagoSeleccionado.estado}
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            )}

        </section>
    );
};

export default PagosDesktop;