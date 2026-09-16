'use client'

import Unauthorized from "@/components/Unauthorized";
import { useAuth } from "@/contexts/AuthContext";
import DashboardAdminView from "@/views/dashboards/DashboardAdminView";



const DashboardAdminRoute = () => {
    const { usuario, loading } = useAuth()

    if(usuario?.rol === 'admin') {
        return(
            <>
                <Unauthorized/>
            </>
        )
    } else return(
        <>
            <DashboardAdminView/>
        </>
    )
}

export default DashboardAdminRoute