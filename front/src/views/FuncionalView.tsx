import FuncionalDesktop from "./deportes/desktop/funcionalDesktop"

const FuncionalView = () => {
    return(
        <>
            {/* VISTA DESKTOP */}
            <div className="hidden md:block">
                <FuncionalDesktop />
            </div>

            {/* VISTA MOBILE */}
            <div className="block md:hidden">

            </div>
        </>
    )
}

export default FuncionalView;