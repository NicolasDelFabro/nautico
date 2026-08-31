import ContactosDesktop from "./desktop/ContatosDesktop";
import ContactosMobile from "./mobile/ContactosMobile";

const ContactosView = () => {
    return(
        <>
      {/* ---DESKTOP--- */}
        <div className="hidden md:block">
          <ContactosDesktop />
        </div>

      {/* ---MOBILE--- */}
        <div className="block md:hidden">
          <ContactosMobile />
        </div>
    </>
    )
}

export default ContactosView;