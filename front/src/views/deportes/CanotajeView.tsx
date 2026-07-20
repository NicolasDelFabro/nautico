import CanotajeDesktop from "./desktop/CanotajeDesktop";
import CanotajeMobile from "./mobile/CanotajeMobile";

const CanotajeView = () => {
  return(
    <>
      {/* ---DESKTOP--- */}
        <div className="hidden md:block">
          <CanotajeDesktop />
        </div>

      {/* ---MOBILE--- */}
        <div className="block md:hidden">
          <CanotajeMobile />
        </div>
    </>
  )
}

export default CanotajeView;