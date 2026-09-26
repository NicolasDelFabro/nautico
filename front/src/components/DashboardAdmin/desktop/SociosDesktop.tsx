"use client";

import { useEffect, useState } from "react";
import { FaPlus, FaSearch, FaUser } from "react-icons/fa";

import { IUser, ICreateUser } from "@/interfaces/User";
import { getAllUsers, createUser } from "@/services/UserServices";

const SociosDesktop = () => {

    const [socios, setSocios] = useState<IUser[]>([]);
    const [busqueda, setBusqueda] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("todos");
    const [paginaActual, setPaginaActual] = useState(1);

    const usuarioPorPagina = 5;

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const [nuevoSocio, setNuevoSocio] = useState<ICreateUser>({
        name: "",
        dni: 0,
        birthdate: "",
        address: "",
        phone: "",
        email: "",
        password: "",
        rol: "socio",
    });

    const [loading, setLoading] = useState(true);
    const [creando, setCreando] = useState(false);
    const [error, setError] = useState("");

    const cargarSocios = async () => {

        try {

            setLoading(true);
            setError("");

            const data = await getAllUsers();

            setSocios(data);

        } catch (error) {

            console.error(error);

            setError("No se pudieron cargar los socios.");

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        cargarSocios();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const { name, value } = e.target;   

        setNuevoSocio((prev) => ({
            ...prev,
            [name]: name === "dni"
                ? Number(value)
                : value,
        }));

    };

    const handleCrearSocio = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        try {

            setCreando(true);
            setError("");

            await createUser(nuevoSocio);

            setNuevoSocio({
                name: "",
                dni: 0,
                birthdate: "",
                address: "",
                phone: "",
                email: "",
                password: "",
                rol: "socio",
            });

            setMostrarFormulario(false);

            await cargarSocios();

        } catch (error) {

            console.error(error);

            setError("No se pudo crear el socio.");

        } finally {

            setCreando(false);

        }
    };

    const sociosFiltrados = socios.filter((socio) => {

        const texto = busqueda.toLowerCase();

        const coincideBusqueda =
            socio.name.toLowerCase().includes(texto) ||
            socio.dni.toString().includes(busqueda) ||
            socio.email.toLowerCase().includes(texto);

        const coincideEstado =
            filtroEstado === "todos" ||
            (filtroEstado === "activos" && socio.active) ||
            (filtroEstado === "inactivos" && !socio.active);

        return coincideBusqueda && coincideEstado;

    });

    const indiceUltimoUsuario = paginaActual * usuarioPorPagina;

    const indicePrimerUsuario =
        indiceUltimoUsuario - usuarioPorPagina;

    const sociosPagina = sociosFiltrados.slice(
        indicePrimerUsuario,
        indiceUltimoUsuario
    );

    const totalPaginas = Math.ceil(
        sociosFiltrados.length / usuarioPorPagina
    );

    return (

        <section className="w-full min-h-full p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-primary-text">
                        Socios
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Administración de los socios del club
                    </p>
                </div>
                <button
                    onClick={() => setMostrarFormulario(true)}
                    className="flex items-center gap-2 bg-primary text-background px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                    <FaPlus />
                    Nuevo socio
                </button>
            </div>
            {/* ERROR */}
            {error && (

                <div className="mb-5 p-4 rounded-xl bg-red-100 text-red-700">
                    {error}
                </div>
            )}
            {/* BUSCADOR */}
            <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                    <FaSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Buscar por nombre, DNI o email..."
                        value={busqueda}
                        onChange={(e) => {
                            setBusqueda(e.target.value);
                            setPaginaActual(1);
                        }}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary"
                    />
                </div>
                <select
                    value={filtroEstado}
                    onChange={(e) => {
                        setFiltroEstado(e.target.value);
                        setPaginaActual(1);
                    }}
                    className="px-5 py-3 rounded-xl border border-gray-200 outline-none"
                >
                    <option value="todos">
                        Todos
                    </option>

                    <option value="activos">
                        Activos
                    </option>

                    <option value="inactivos">
                        Inactivos
                    </option>
                </select>
            </div>
            {/* TABLA */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                    </div>
                ) : sociosFiltrados.length === 0 ? (
                    <div className="flex flex-col justify-center items-center py-20 text-gray-400">
                        <FaUser className="text-4xl mb-3" />
                        <p>
                            No se encontraron socios
                        </p>
                    </div>
                ) : (
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left px-6 py-4">
                                    Socio
                                </th>

                                <th className="text-left px-6 py-4">
                                    DNI
                                </th>

                                <th className="text-left px-6 py-4">
                                    Teléfono
                                </th>

                                <th className="text-left px-6 py-4">
                                    Email
                                </th>

                                <th className="text-left px-6 py-4">
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sociosPagina.map((socio) => (
                                <tr
                                    key={socio.id}
                                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <FaUser />
                                            </div>

                                            <span className="font-semibold">
                                                {socio.name}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        {socio.dni}
                                    </td>

                                    <td className="px-6 py-4">
                                        {socio.phone}
                                    </td>

                                    <td className="px-6 py-4">
                                        {socio.email}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={
                                                socio.active
                                                    ? "px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700"
                                                    : "px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700"
                                            }
                                        >
                                            {socio.active ? "Activo" : "Inactivo"}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div>
                    <button onClick={() => setPaginaActual((prev) => prev - 1)}>
                        Anterior
                    </button>
                    <button onClick={() => setPaginaActual((prev) => prev + 1)}>
                        Siguiente
                    </button>
                </div>
            </div>
            {/* FORMULARIO */}
            {mostrarFormulario && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
                    <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl p-7">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Nuevo socio
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Ingresá los datos del socio
                                </p>
                            </div>
                            <button
                                onClick={() =>
                                    setMostrarFormulario(false)
                                }
                                className="text-2xl text-gray-400 hover:text-gray-700"
                            >
                                ×
                            </button>
                        </div>
                        <form
                            onSubmit={handleCrearSocio}
                            className="grid grid-cols-2 gap-4"
                        >
                            <input
                                name="name"
                                placeholder="Nombre"
                                value={nuevoSocio.name}
                                onChange={handleChange}
                                required
                                className="border rounded-xl px-4 py-3"
                            />

                            <input
                                name="dni"
                                type="number"
                                placeholder="DNI"
                                value={nuevoSocio.dni || ""}
                                onChange={handleChange}
                                required
                                className="border rounded-xl px-4 py-3"
                            />

                            <input
                                name="birthdate"
                                type="date"
                                value={nuevoSocio.birthdate}
                                onChange={handleChange}
                                required
                                className="border rounded-xl px-4 py-3"
                            />

                            <input
                                name="phone"
                                type="tel"
                                placeholder="Teléfono"
                                value={nuevoSocio.phone}
                                onChange={handleChange}
                                required
                                className="border rounded-xl px-4 py-3"
                            />

                            <input
                                name="address"
                                placeholder="Dirección"
                                value={nuevoSocio.address}
                                onChange={handleChange}
                                required
                                className="col-span-2 border rounded-xl px-4 py-3"
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={nuevoSocio.email}
                                onChange={handleChange}
                                required
                                className="col-span-2 border rounded-xl px-4 py-3"
                            />

                            <input
                                name="password"
                                type="password"
                                placeholder="Contraseña inicial"
                                value={nuevoSocio.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                                className="col-span-2 border rounded-xl px-4 py-3"
                            />

                            <div className="col-span-2 flex justify-end gap-3 mt-4">

                                <button
                                    type="button"
                                    onClick={() =>
                                        setMostrarFormulario(false)
                                    }
                                    className="px-5 py-3 rounded-xl border font-semibold"
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    disabled={creando}
                                    className="px-5 py-3 rounded-xl bg-primary text-background font-semibold disabled:opacity-50"
                                >
                                    {creando
                                        ? "Creando..."
                                        : "Crear socio"}
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </section>
    );
};

export default SociosDesktop;