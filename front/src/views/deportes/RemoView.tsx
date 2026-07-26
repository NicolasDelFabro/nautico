import RemoDesktop from "./desktop/RemoDesktop";
import RemoMobile from "./mobile/RemoMobile";

const RemoView = () => {
  return(
    <>
      {/* ---DESKTOP--- */}
        <div className="hidden md:block">
          <RemoDesktop />
        </div>

      {/* ---MOBILE--- */}
        <div className="block md:hidden">
          <RemoMobile />
        </div>
    </>
  )
}

export default RemoView;