import Image from "next/image";
import landing from "../../public/Landing.png";
import canotaje from "../../public/canotaje.png";
import remo from "../../public/remo.png";
import funcional from "../../public/funcional.png";


const Landing = () => {
    return(
        <div className="flex flex-col items-center w-[100vw] min-h-screen bg-(--background)">
            <Image src={landing} alt="Imagen de un rio con arboles"/>

            <h2 className="text-secondary font-bold text-4xl mt-5">Nuestros Deportes</h2>

            <div className="flex justify-between items-center">
                <div>
                    <Image src={canotaje} alt="Persona realizando deporte" />
                </div>
                <div>
                    <Image src={remo} alt="Persona realizando deporte" />
                </div>
                <div>
                    <Image src={funcional} alt="Persona realizando deporte" />
                </div>
            </div>
        </div>
    )
}

export default Landing;