import Image from "next/image";
import landing from "../../public/Landing.png";
import canotaje from "../../public/canotaje.png";
import remo from "../../public/remo.png";
import funcional from "../../public/funcional.png";
import { TbKayak } from "react-icons/tb";
import { MdOutlineRowing } from "react-icons/md";
import { CgGym } from "react-icons/cg";


const Landing = () => {
    return(
        <div className="flex flex-col items-center w-[100vw] min-h-screen bg-background)">
            <Image src={landing} alt="Imagen de un rio con arboles"/>

            <h2 className="text-secondary font-bold text-4xl mt-5">Nuestros Deportes</h2>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <Image src={canotaje} alt="Persona realizando deporte" />
                    <div className="flex justify-self-auto items-center">
                        <TbKayak color="#000E29" size={45}/>
                        <h2 className="text-primary font-bold text-2xl">Canotaje</h2>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Image src={remo} alt="Persona realizando deporte" />
                    <div className="flex justify-baseline items-center">
                        <MdOutlineRowing color="#000E29" size={45}/>
                        <h2 className="text-primary font-bold text-2xl">Remo</h2>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Image src={funcional} alt="Persona realizando deporte" />
                    <div className="flex justify-baseline items-center">    
                        <CgGym color="#000E29" size={45}/>
                        <h2 className="text-primary font-bold text-2xl">Funcional</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;