import ContactosDesktop from "./desktop/ContatosDesktop";

const ContactosView = () => {
    return(
        <>
        {/* VISTA DESKTOP */}
            <div className="hidden md:block">
                <ContactosDesktop />
            </div>

        {/* VISTA MOBILE */}
            <div>

            </div>
        </>
    )
}

export default ContactosView;