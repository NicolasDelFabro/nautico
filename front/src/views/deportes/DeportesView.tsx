import DeportesDesktop from "./desktop/DeportesDesktop"
import DeportesMobile from "./mobile/DeportesMobile";

const DeportesView = () => {
    return(
        <>
            {/* VISTA DESKTOP */}
            <div className="hidden md:block">
                <DeportesDesktop />
            </div>
            
            {/* VISTA MOBILE */}
                <div className="block md:hidden">
                    <DeportesMobile />
                </div>
        </>
    )
}

export default DeportesView;