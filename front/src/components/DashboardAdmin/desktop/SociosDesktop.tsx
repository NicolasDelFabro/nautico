"use client";

import { useEffect, useState } from "react";
import { FaPlus, FaSearch, FaUser } from "react-icons/fa";
import { SiCodefactor } from "react-icons/si";
import { IUser, ICreateUser, IEditUser } from "@/interfaces/User";
import { getAllUsers, createUser, editUser } from "@/services/UserServices";

const SociosDesktop = () => {
    const [socios, setSocios] = useState<IUser[]>([]);
    const [busqueda, setBusqueda] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("todos");

    const [loading, setLoading] = useState(true);
    const [creando, setCreando] = useState(false);
    const [editando, setEditando] = useState(false);
    const [error, setError] = useState("");

    const [paginaActual, setPaginaActual] = useState(1);
    const usuarioPorPagina = 5;

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [socioIdEditando, setSocioIdEditando] =
        useState<number | null>(null);


    // CREAR SOCIO //
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


    //  EDITAR SOCIO //
    const [editSocio, setEditSocio] = useState<IEditUser>({
        name: "",
        birthdate: "",
        address: "",
        phone: "",
        email: "",
        active: true
    });

    // TRAER SOCIOS //

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

    useEffect(() => { cargarSocios() }, []);

    // HANDLER CARGAR DATOS DE USUARIO USUARIO //
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNuevoSocio((prev) => ({
            ...prev, [name]:
                name === "dni"
                    ? Number(value)
                    : value,
        }));
    };

    // HANDLER CARGAR EDICION //
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setEditSocio((prev) => ({
            ...prev, [name]:
                name === "dni"
                    ? Number(value)
                    : value,
        }));
    };

    // HANDLER CREAR SOCIO //
    const handleCrearSocio = async (e: React.FormEvent<HTMLFormElement>) => {
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

    // HANDLER DE MODAL EDITAR SOCIO //
    const handleOpenEdit = (socio: IUser) => {
        setSocioIdEditando(socio.id);
        setEditSocio({
            name: socio.name,
            birthdate: socio.birthdate,
            address: socio.address,
            phone: socio.phone,
            email: socio.email,
            active: socio.active,
        });
        setOpenModal(true);
    };


    // HANDLER CERRAR EDITAR SOCIO //
    const handleCloseEdit = () => {
        setOpenModal(false);
        setSocioIdEditando(null);
        setEditSocio({
            name: "",
            birthdate: "",
            address: "",
            phone: "",
            email: "",
            active: true,
        });
    };

    // HANDLER EDITAR SOCIO //
    const handlerEditarSocio = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (socioIdEditando === null) {
            return;
        }

        try {
            setEditando(true);
            setError("");
            await editUser(
                socioIdEditando,
                editSocio
            );

            handleCloseEdit();
            await cargarSocios();
        } catch (error) {
            console.error(error);
            setError("No se pudo modificar el socio.");
        } finally {
            setEditando(false);
        }
    };

    // FILTROS DE BUSQUEDA //
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

    // PAGINADO //
    const indiceUltimoUsuario =
        paginaActual * usuarioPorPagina;

    const indicePrimerUsuario =
        indiceUltimoUsuario - usuarioPorPagina;

    const sociosPagina = sociosFiltrados.slice(
        indicePrimerUsuario,
        indiceUltimoUsuario
    );

    const totalPaginas = Math.ceil(
        sociosFiltrados.length / usuarioPorPagina
    );


    const paginaAnterior = () => {

        setPaginaActual((prev) =>
            prev > 1
                ? prev - 1
                : prev
        );
    };


    const paginaSiguiente = () => {

        setPaginaActual((prev) =>
            prev < totalPaginas
                ? prev + 1
                : prev
        );
    };

    return (

        <section className="w-full min-h-full p-8">

            {/* HEADER */}

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

                                <th className="text-left px-6 py-4">
                                    Acciones
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
                                            {socio.active
                                                ? "Activo"
                                                : "Inactivo"}
                                        </span>

                                    </td>


                                    <td className="px-6 py-4">

                                        <button
                                            onClick={() =>
                                                handleOpenEdit(socio)
                                            }
                                            className="text-primary hover:opacity-70 transition"
                                        >

                                            <SiCodefactor />

                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}


                {/* PAGINACIÓN */}

                {sociosFiltrados.length > 0 && (

                    <div className="flex items-center justify-center gap-4 p-4">

                        <button
                            onClick={paginaAnterior}
                            disabled={paginaActual === 1}
                            className="px-4 py-2 rounded-lg border disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Anterior
                        </button>


                        <span className="text-sm text-gray-600">

                            Página {paginaActual} de {totalPaginas}

                        </span>


                        <button
                            onClick={paginaSiguiente}
                            disabled={paginaActual >= totalPaginas}
                            className="px-4 py-2 rounded-lg border disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Siguiente
                        </button>

                    </div>

                )}

            </div>


            {/* ========================================= */}
            {/* MODAL CREAR SOCIO */}
            {/* ========================================= */}

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
                                type="button"
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
                                    className="px-5 py-3 rounded-xl border"
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


            {/* ========================================= */}
            {/* MODAL EDITAR SOCIO */}
            {/* ========================================= */}

            {openModal && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">

                    <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl p-7">

                        <div className="flex justify-between items-center mb-6">

                            <div>

                                <h2 className="text-2xl font-bold">
                                    Editar socio
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Modificá los datos del socio
                                </p>

                            </div>


                            <button
                                type="button"
                                onClick={handleCloseEdit}
                                className="text-2xl text-gray-400 hover:text-gray-700"
                            >
                                ×
                            </button>

                        </div>


                        <form
                            onSubmit={handlerEditarSocio}
                            className="grid grid-cols-2 gap-4"
                        >

                            <input
                                name="name"
                                placeholder="Nombre"
                                value={editSocio.name}
                                onChange={handleEditChange}
                                required
                                className="border rounded-xl px-4 py-3"
                            />


                            <input
                                name="birthdate"
                                type="date"
                                value={editSocio.birthdate}
                                onChange={handleEditChange}
                                required
                                className="border rounded-xl px-4 py-3"
                            />


                            <input
                                name="phone"
                                type="tel"
                                placeholder="Teléfono"
                                value={editSocio.phone}
                                onChange={handleEditChange}
                                required
                                className="border rounded-xl px-4 py-3"
                            />


                            <input
                                name="address"
                                placeholder="Dirección"
                                value={editSocio.address}
                                onChange={handleEditChange}
                                required
                                className="col-span-2 border rounded-xl px-4 py-3"
                            />


                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={editSocio.email}
                                onChange={handleEditChange}
                                required
                                className="col-span-2 border rounded-xl px-4 py-3"
                            />


                            {/* ESTADO */}

                            <div className="flex flex-col gap-2">

                                <label className="text-sm font-medium text-gray-600">
                                    Estado
                                </label>

                                <select
                                    value={
                                        editSocio.active
                                            ? "true"
                                            : "false"
                                    }
                                    onChange={(e) =>
                                        setEditSocio((prev) => ({
                                            ...prev,
                                            active:
                                                e.target.value === "true",
                                        }))
                                    }
                                    className="border rounded-xl px-4 py-3"
                                >

                                    <option value="true">
                                        Activo
                                    </option>

                                    <option value="false">
                                        Inactivo
                                    </option>

                                </select>

                            </div>

                            <div className="col-span-2 flex justify-end gap-3 mt-4">

                                <button
                                    type="button"
                                    onClick={handleCloseEdit}
                                    disabled={editando}
                                    className="px-5 py-3 rounded-xl border disabled:opacity-50"
                                >
                                    Cancelar
                                </button>


                                <button
                                    type="submit"
                                    disabled={editando}
                                    className="px-5 py-3 rounded-xl bg-primary text-background font-semibold disabled:opacity-50"
                                >

                                    {editando
                                        ? "Guardando..."
                                        : "Guardar cambios"}

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