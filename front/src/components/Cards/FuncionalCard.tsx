import Link from "next/link";
import Image from "next/image";
import funcionalCard from "../../../public/funcionalCard.png";
import funcional from "../../../public/funcional.png";

export const FuncionalCardDesktop = () => {
    return(
        <div className="flex flex-col w-[20vw] bg-background shadow shadow-lg shadow-shadow rounded-3xl pb-4">
                <div className="h-[200px]">
                  <Image
                    src={funcionalCard}
                    alt="Funcional"
                    className="w-[100%] h-[200px] rounded-t-3xl"
                  />
                </div>
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-background rounded-[100%] mt-[-25px] mx-5 shadow shadow-2xl shadow-white">
                  <Image src={funcional} alt="Funcional" />
                </div>
                <div>
                  <h3 className="text-primary-text text-xl font-semibold mx-22 my-[-20px]">
                    FUNCIONAL
                  </h3>
                </div>
                <div className="mx-5 mt-6 w-4xs">
                  <p className="text-primary-text font-regular pb-5">
                    Entrenamientos pensados para mejorar tu rendimiento.
                  </p>
                  <Link href="./deportes/funcional" className="m-5">
                    <p className="text-lg text-primary-text font-bold">
                      Ver más
                    </p>
                  </Link>
                </div>
              </div>
    )
}

export const FuncionalCardMobile = () => {
    return(
      <div className="flex flex-col w-full bg-background shadow-lg shadow-shadow rounded-3xl overflow-hidden">
      
        {/* IMAGEN */}
        <div className="relative h-[180px] w-full">
          <Image
            src={funcionalCard}
            alt="Funcional"
            fill
            className="object-cover"
            />
        </div>

        {/* CONTENIDO */}
        <div className="relative px-5 pt-10 pb-6">

        {/* ICONO */}
        <div className="absolute -top-7 left-5 flex justify-center items-center w-[60px] h-[60px] bg-background rounded-full shadow-lg shadow-shadow">
          <Image
            src={funcional}
            alt="Icono de funcional"
          />
        </div>

        {/* TITULO */}
        <h3 className="font-title text-primary-text text-xl font-semibold">
          FUNCIONAL
        </h3>

        {/* DESCRIPCIÓN */}
        <p className="font-body text-primary-text mt-3 text-sm">
          Entrenamientos pensados para mejorar tu rendimiento.
        </p>

        {/* LINK */}
        <Link
          href="/deportes/funcional"
          className="font-title inline-block mt-5 text-primary-text font-bold"
        >
          Ver más →
        </Link>

      </div>
    </div>
    )
}