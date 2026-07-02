import Image from "next/image";
import landing from "../../public/Landing.png";
import canotaje from "../../public/canotaje.png";
import remo from "../../public/remo.png";
import funcional from "../../public/funcional.png";
import { TbKayak } from "react-icons/tb";
import { MdOutlineRowing } from "react-icons/md";
import { CgGym } from "react-icons/cg";

const Landing = () => {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-[#EFF7EC]">

            <Image
                src={landing}
                alt="Imagen de un río con árboles"
                className="w-full h-auto"
                priority
            />

            <h2 className="text-secondary font-bold text-4xl mt-5">
                Nuestros Deportes
            </h2>

            {/* Vista Desktop (solo PC) */}
            <div className="hidden lg:grid grid-cols-3 gap-8 w-full px-6 mt-10">

                <div className="flex flex-col bg-[#032F46] rounded-t-4xl rounded-b-3xl overflow-hidden">
                    <Image
                        src={canotaje}
                        alt="Persona realizando canotaje"
                        className="w-full h-auto"
                    />
                    <div className="flex items-center gap-3 p-4">
                        <TbKayak color="#EFF7EC" size={45} />
                        <h2 className="text-[#EFF7EC] font-bold text-2xl">
                            Canotaje
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col bg-[#032F46] rounded-t-4xl rounded-b-3xl overflow-hidden">
                    <Image
                        src={remo}
                        alt="Persona realizando remo"
                        className="w-full h-auto"
                    />

                    <div className="flex items-center gap-3 p-4">
                        <MdOutlineRowing color="#EFF7EC" size={45} />
                        <h2 className="text-[#EFF7EC] font-bold text-2xl">
                            Remo
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col bg-[#032F46] rounded-t-4xl rounded-b-3xl overflow-hidden">
                    <Image
                        src={funcional}
                        alt="Persona realizando entrenamiento funcional"
                        className="w-full h-auto"
                    />

                    <div className="flex items-center gap-3 p-4">
                        <CgGym color="#EFF7EC" size={45} />
                        <h2 className="text-[#EFF7EC] font-bold text-2xl">
                            Funcional
                        </h2>
                    </div>
                </div>

            </div>

            {/* Vista Mobile (celular y tablet) */}
            <div className="grid grid-cols-1 gap-4 mx-2 lg:hidden">

                <div className="flex flex-col bg-[#032F46] rounded-4xl overflow-hidden">
                    <Image
                        src={canotaje}
                        alt="Persona realizando canotaje"
                        className="w-[95vw] h-auto"
                    />

                    <div className="flex items-center gap-2 p-3">
                        <TbKayak color="#EFF7EC" size={45} />
                        <h2 className="text-[#EFF7EC] font-bold text-2xl">
                            Canotaje
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col bg-[#032F46] rounded-3xl overflow-hidden">
                    <Image
                        src={remo}
                        alt="Persona realizando remo"
                        className="w-[95vw] h-auto"
                    />

                    <div className="flex items-center gap-2 p-3">
                        <MdOutlineRowing color="#EFF7EC" size={45} />
                        <h2 className="text-white font-bold text-2xl">
                            Remo
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col bg-[#032F46] rounded-3xl overflow-hidden">
                    <Image
                        src={funcional}
                        alt="Persona realizando entrenamiento funcional"
                        className="w-[95vw] h-auto"
                    />

                    <div className="flex items-center gap-2 p-3">
                        <CgGym color="#EFF7EC" size={45} />
                        <h2 className="text-[#EFF7EC] font-bold text-2xl">
                            Funcional
                        </h2>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Landing;