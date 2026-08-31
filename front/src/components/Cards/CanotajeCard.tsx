import Link from "next/link";
import Image from "next/image";
import canotajeCard from "../../../public/canotajeCard.png";
import canotaje from "./../../../public/Canotaje.png";

export const CanotajeCardDesktop = () => {
    return(
        <div className="flex flex-col w-[20vw] bg-background shadow shadow-lg shadow-shadow rounded-3xl pb-4">
                <div className="h-[200px]">
                  <Image
                    src={canotajeCard}
                    alt="Canotaje"
                    className="w-[100%] h-[200px] rounded-t-3xl"
                  />
                </div>
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-background rounded-[100%] mt-[-25px] mx-5 shadow shadow-2xl shadow-shadow">
                  <Image src={canotaje} alt="Canotaje" />
                </div>
                <div>
                  <h3 className="text-primary-text text-xl font-semibold mx-22 my-[-20px]">
                    KAYAK
                  </h3>
                </div>
                <div className="mx-5 mt-6 w-4xs">
                  <p className="text-primary-text font-regular pb-5">
                    Disfrutá de la aventura en el agua y supera tus limites.
                  </p>
                  <Link href="./deportes/kayak" className="m-5 py-5">
                    <p className="text-lg text-primary-text font-bold">
                      Ver más
                    </p>
                  </Link>
                </div>
              </div>
    )
}

export const CanotajeCardMobile = () => {
  return(
      <div className="flex flex-col w-full bg-background shadow-lg shadow-shadow rounded-3xl overflow-hidden">
        {/* IMAGEN */}
        <div className="relative h-[180px] w-full">
          <Image
            src={canotajeCard}
            alt="Canotaje"
            fill
            className="object-cover"
          />
          </div>

        {/* CONTENIDO */}
        <div className="relative px-5 pt-10 pb-6">

        {/* ICONO */}
        <div className="absolute -top-7 left-5 flex justify-center items-center w-[60px] h-[60px] bg-background rounded-full shadow-lg shadow-shadow">
          <Image
            src={canotaje}
            alt="Icono de kayak"
          />
        </div>

        {/* TITULO */}
        <h3 className="font-title text-primary-text text-xl font-semibold">
          KAYAK
        </h3>

        {/* DESCRIPCIÓN */}
        <p className="font-body text-primary-text mt-3 text-sm">
          Disfrutá de la aventura en el agua y superá tus límites.
        </p>

        {/* LINK */}
        <Link
          href="/deportes/kayak"
          className="font-title inline-block mt-5 text-primary-text font-bold"
        >
          Ver más →
        </Link>

      </div>
    </div>
  )
}