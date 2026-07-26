import {
  FaUser,
  FaUserGraduate,
  FaChild,
  FaMedal,
} from "react-icons/fa";

const ParaQuienes = () => {
    return(
        <div className="grid grid-cols-4 justify-center items-center w-[85vw] p-10 bg-terciario shadow-2xl shadow-terciario my-10 rounded-3xl">
            <div className="flex flex-col justify-center items-center text-center">
                <FaUser size={40} className="text-secundary"/>
                <p className="text-lg font-semibold text-primary-text py-3">PRINCIPIANTES</p>
                <span className="font-medium text-primary-text">
                    No necesitás experiencia prevía. <br />
                    Te enseñamos desde cero.
                </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <FaUserGraduate size={40} className="text-secundary"/>
                <p className="text-lg font-semibold text-primary-text py-3">JÓVENES</p>
                <span className="font-medium text-primary-text">
                    Ideal para desarrollar habilidades <br />
                    y conocer nuevos amigos
                </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <FaChild size={40} className="text-secundary"/>
                <p className="text-lg font-semibold text-primary-text py-3">ADULTOS</p>
                <span className="font-medium text-primary-text">
                    Mantente activo y disfrutá <br />
                    del aire libre
                </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <FaMedal size={40} className="text-secundary"/>
                <p className="text-lg font-semibold text-primary-text py-3">COMPETIDORES</p>
                <span className="font-medium text-primary-text">
                    Entrenamintos de alto rendimiento <br />
                    para alcanzar tus metas
                </span>
            </div>
        </div>
    )
}

export default ParaQuienes;