import Link from "next/link";
import Image from "next/image";
import remoCard from "../../../public/remoCard.png";
import remo from "../../../public/remo.png";

export const RemoCardDesktop = () => {
    return(
        <div className="flex flex-col w-[20vw] bg-background shadow shadow-lg shadow-shadow rounded-3xl pb-4">
                <div className="h-[200px]">
                  <Image
                    src={remoCard}
                    alt="Remo"
                    className="w-[100%] h-[200px] rounded-t-3xl"
                  />
                </div>
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-background rounded-[100%] mt-[-25px] mx-5 shadow shadow-2xl shadow-white">
                  <Image src={remo} alt="Remo" />
                </div>
                <div>
                  <h3 className="text-primary-text text-xl font-semibold mx-22 my-[-20px]">
                    REMO
                  </h3>
                </div>
                <div className="mx-5 mt-6 w-4xs">
                  <p className="text-primary-text font-regular pb-5">
                    Trabajo en equipo, tecnica y pasión por el remo.
                  </p>
                  <Link href="./deportes/remo" className="m-5">
                    <p className="text-primary-text text-lg font-bold">
                      Ver más
                    </p>
                  </Link>
                </div>
              </div>
    )
}

export const RemoCardMobile = () => {
  return(
      <div className="flex flex-col w-full bg-background shadow-lg shadow-shadow rounded-3xl overflow-hidden">
            
              {/* IMAGEN */}
              <div className="relative h-[180px] w-full">
                <Image
                  src={remoCard}
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
                  src={remo}
                  alt="Icono de funcional"
                />
              </div>
      
              {/* TITULO */}
              <h3 className="font-title text-primary-text text-xl font-semibold">
                REMO
              </h3>
      
              {/* DESCRIPCIÓN */}
              <p className="font-body text-primary-text mt-3 text-sm">
                Trabajo en equipo, tecnica y pasión por el remo.
              </p>
      
              {/* LINK */}
              <Link
                href="/deportes/remo"
                className="font-title inline-block mt-5 text-primary-text font-bold"
              >
                Ver más →
              </Link>
      
            </div>
          </div>
  )
}