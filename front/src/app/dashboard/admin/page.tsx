'use client'

import Unauthorized from "@/components/Unauthorized";
import { useAuth } from "@/contexts/AuthContext";
import DashboardAdminView from "@/views/dashboards/admin/DashboardAdminView";



const DashboardAdminRoute = () => {
    const { usuario, loading } = useAuth()

    if(!usuario) {
        return(
            <>
                <Unauthorized/>
            </>
        )
    } else if(usuario.rol === 'admin') {
        return(
            <>
                <DashboardAdminView/>
            </>
        )
    }
}

export default DashboardAdminRoute