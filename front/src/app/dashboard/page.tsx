'use client'

import DashboardView from "@/views/dashboards/DashboardView";
import Unauthorized from "@/components/Unauthorized";
import { useAuth } from "@/contexts/AuthContext";

const DashboardRoute = () => {
    const data = useAuth()
    if(!data.usuario) {
        return(
            <>
                <Unauthorized />
            </>
        )
    } else return(
        <>
            <DashboardView/>
        </>
    )
}

export default DashboardRoute;