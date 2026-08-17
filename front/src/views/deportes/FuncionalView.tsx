import FuncionalDesktop from "./desktop/funcionalDesktop";
import FuncionalMobile from "./mobile/FuncionalMobile";

const FuncionalView = () => {
    return(
        <>
            {/* VISTA DESKTOP */}
            <div className="hidden md:block">
                <FuncionalDesktop />
            </div>

            {/* VISTA MOBILE */}
            <div className="block md:hidden">
                <FuncionalMobile/>
            </div>
        </>
    )
}

export default FuncionalView;