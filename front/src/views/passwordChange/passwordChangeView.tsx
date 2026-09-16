import PasswordChangeDesktop from "./desktop/PasswordChangeDesktop";
import PasswordChangeMobile from "./mobile/PasswordChangeMobile";

const PasswordChangeView = () => {
    return(
        <>
      {/* ---DESKTOP--- */}
        <div className="hidden md:block">
          <PasswordChangeDesktop />
        </div>

      {/* ---MOBILE--- */}
        <div className="block md:hidden">
          <PasswordChangeMobile />
        </div>
    </>
    )
}

export default PasswordChangeView;