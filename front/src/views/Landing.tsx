import Image from "next/image";
import landing from "../../public/Landing.png";

//! INVESTIGAR COMO ADAPTAR CORRECTAMENTE EL ANCHO DE LA FOTO PARA QUE SE AJUSTE AL ANCHO DE LA PANTALLA;
const Landing = () => {
    return(
        <div className="flex flex-col items-center justify-center">
            <Image src={landing} alt="Imagen de un rio con arboles"/>
        </div>
    )
}

export default Landing;