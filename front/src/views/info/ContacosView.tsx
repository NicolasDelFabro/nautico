import ContactosDesktop from "./desktop/ContatosDesktop";
import ContactosMobile from "./mobile/ContactosMobile";

const ContactosView = () => {
    return(
        <>
        {/* VISTA DESKTOP */}
            <div className="hidden md:block">
                <ContactosDesktop />
            </div>

        {/* VISTA MOBILE */}
            <div>
                <ContactosMobile />
            </div>
        </>
    )
}

export default ContactosView;