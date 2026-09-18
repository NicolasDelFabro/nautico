'use client'

import { useState } from "react";
import DashboardAdmin from "@/components/DashboardAdmin/desktop/DashboardAdmin";
import SociosDesktop from "@/components/DashboardAdmin/desktop/SociosDesktop";
import PagosDesktop from "@/components/DashboardAdmin/desktop/PagosDesktop";

const DashboardAdminDesktop = () => {

    const [vista, setVista] = useState('dashboard');

    return (
        <section className="flex w-full h-[calc(100vh-80px)]">

            {/* SIDEBAR */}
            <div className="flex flex-col gap-1 w-[20vw] bg-background">

                <button className={
                    vista === 'dashboard'
                        ? 'flex items-start pl-2 bg-primary text-background font-semibold rounded-br-xl py-2'
                        : 'flex items-start pl-2 bg-transparent text-primary-text font-bold py-2'}
                    onClick={() => setVista('dashboard')}>
                    Dashboard
                </button>

                <button
                    className={
                        vista === 'socios'
                            ? 'flex items-start pl-2 bg-primary text-background font-semibold py-2'
                            : 'flex items-start pl-2 bg-transparent text-primary-text font-semibold py-2'
                    }
                    onClick={() => setVista('socios')}
                >
                    Socios
                </button>

                <button
                    className={
                        vista === 'pagos'
                            ? 'flex items-start pl-2 bg-primary text-background font-semibold rounded-r-xl py-2'
                            : 'flex items-start pl-2 bg-transparent text-primary-text font-semibold py-2'
                    }
                    onClick={() => setVista('pagos')}
                >
                    Pagos
                </button>

            </div>


            {/* CONTENIDO */}
            <div className="w-[80vw] h-full overflow-y-auto hide-scrollbar">
                {vista === 'dashboard' && <DashboardAdmin />}
                {vista === 'socios' && <SociosDesktop />}
                {vista === 'pagos' && <PagosDesktop />}
            </div>

        </section>
    )
}

export default DashboardAdminDesktop;