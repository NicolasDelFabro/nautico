'use client'

import { useAuth } from "@/contexts/AuthContext";
import DashboardAdminView from "@/views/dashboards/DashboardAdminView";
import { redirect } from "next/dist/server/api-utils";


const DashboardAdminRoute = () => {

    const { usuario, loading } = useAuth()

    if(loading) {
        return <p>Cargando ...</p>
    } else if (!usuario) {
        return <p>NO ESTAS AUTORIZADO</p>
    } else if(usuario.rol !== 'admin') {
        return <p>NO TIENES PERMISOS SUFICIENTES</p>
    } else {
        return(
            <>
                <DashboardAdminView />
            </>
        )
    }
}

export default DashboardAdminRoute