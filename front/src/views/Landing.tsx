import Image from "next/image";
import Link from "next/link";
import Header from "../../public/Header.png";
import { CanotajeCardDesktop, CanotajeCardMobile} from "@/components/Cards/CanotajeCard";
import { RemoCardDesktop, RemoCardMobile} from "@/components/Cards/RemoCard";
import { FuncionalCardDesktop, FuncionalCardMobile } from "@/components/Cards/FuncionalCard";
import compañerismo from "../../public/compañerismo.png";
import disiplina from "../../public/disiplina.png";
import respeto from "../../public/respeto.png";
import pasion from "../../public/pasion.png";
import flayer from "../../public/flayer.png";

const Landing = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <section className="relative h-[700px] w-[100vw]">
          {/* Imagen */}
          <Link href="./">
            <div>
              <Image
                src={Header}
                alt="Club Náutico"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Contenido */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-8">
              <div className="max-w-xl">
                <h1 className="text-6xl font-title text-terciario">
                  NAVEGAMOS
                  <br />
                  JUNTOS DESDE 1978
                </h1>
                <p className="mt-6 text-terciario leading font-semibold">
                  Descubrí un espacio donde el deporte, la naturaleza y la
                  amistad se encuentran.
                </p>
                <Link href="./deportes">
                  <button className="mt-8 bg-primary px-7 py-3 rounded-md text-background font-title">
                    CONOCÉ MÁS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center items-center w-[100vw] bg-background">
          <h3 className="text-primary-text text-3xl font-title my-10">
            ----- NUESTROS DEPORTES ----
          </h3>
          <div className="flex justify-center items-center w-[100vw]">
            <div className="grid grid-cols-3 gap-30 rounded-2xl">
              
              {/*CANOTAJE*/}
              <CanotajeCardDesktop />

              {/*REMO*/}
              <RemoCardDesktop />

              {/*FUNCIONAL*/}
              <FuncionalCardDesktop />

            </div>
          </div>
        </div>
        {/* FLAYER DE LA COMUNIDAD */}
        <div className="flex flex-col justify-center items-center w-[100vw] bg-linear-to-r from-primary to-secundary mt-12">
          <div className="flex flex-col justify-center items-center mt-12">
            <h3 className="text-text-secundary font-title text-3xl">
              SOMOS COMUNIDAD
            </h3>
            <div className="flex flex-col items-center w-xl mt-6">
              <p className="text-text-secundary font-title">
                En el Club Náutico Pergamino promovemos valores
              </p>
              <p className="text-text-secundary font-title">
                que nos acompañan dentro y fuera del agua.
              </p>
            </div>
          </div>

          {/* VALORE */}
          <div className="grid grid-cols-4 gap-60 my-10 w-[90vw]">
            <div className="flex flex-col justify-center items-center">
              <Image src={compañerismo} alt="Compañerismo" />
              <p className="text-text-secundary font-medium text-lg mt-5">
                COMPAÑERISMO
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={disiplina} alt="Disiplina" />
              <p className="text-text-secundary font-medium text-lg mt-5">
                DISIPLINA
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={respeto} alt="Respeto" />
              <p className="text-text-secundary font-medium text-lg mt-5">
                RESPETO
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={pasion} alt="Pasion" />
              <p className="text-text-secundary font-medium text-lg mt-5">
                PASIÓN
              </p>
            </div>
          </div>

          <section className="flex justify-center my-16">
            <div className="relative flex w-[90vw] max-w-7xl h-[260px] rounded-3xl overflow-hidden bg-background">
              {/* Imagen */}
              <div className="relative w-[60%] h-full">
                <Image src={flayer} alt="Club" fill className="object-cover" />

                {/* Degradado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-background" />
              </div>

              {/* Texto */}
              <div className="flex flex-col justify-center px-12 flex-1">
                <h2 className="text-4xl font-title text-primary-text">
                  ¿LISTO PARA SER PARTE?
                </h2>

                <p className="mt-4 text-text-secondary max-w-sm">
                  Sumate a nuestra comunidad y disfrutá de todos los beneficios.
                </p>

                <button className="mt-6 w-fit bg-primary text-white px-6 py-3 rounded-lg font-title hover:scale-105 transition">
                  QUIERO SER SOCIO
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>


      {/* VISTA MOBILE */}
      <div className="block md:hidden">
        <section className="relative h-[500px] w-[100vw]">
          {/* Imagen */}
          <Link href="./">
            <div>
              <Image
                src={Header}
                alt="Club Náutico"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Contenido */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6">
              <div className="max-w-xl">
                <h1 className="text-3xl font-title text-primary-text leading-tight">
                  NAVEGAMOS
                  <br />
                  JUNTOS DESDE 1978
                </h1>

                <p className="mt-4 text-primary-text font-semibold text-sm">
                  Descubrí un espacio donde el deporte, la naturaleza y la
                  amistad se encuentran.
                </p>

                <Link href="./deportes">
                  <button className="mt-8 bg-primary px-7 py-3 rounded-md text-background font-title">
                    CONOCÉ MÁS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center items-center w-[100vw] bg-background px-4">
          <h3 className="text-primary-text text-xl font-title my-8 text-center">
            ----- NUESTROS DEPORTES ----
          </h3>

          {/* CANOTAJE */}
          <div className="py-2">
            <CanotajeCardMobile />
          </div>

          {/* REMO */}
            <div className="py-2">
              <RemoCardMobile />
            </div>

          {/* FUNCIONAL */}
            <div className="py-2">
              <FuncionalCardMobile />
            </div>
        </div>

        {/* FLAYER DE LA COMUNIDAD */}
        <div className="flex flex-col justify-center items-center w-[100vw] bg-linear-to-r from-primary to-secundary mt-12">
          <div className="flex flex-col justify-center items-center mt-12 px-6 text-center">
            <h3 className="text-text-secundary font-title text-xl">
              SOMOS COMUNIDAD
            </h3>
            <div className="flex flex-col items-center w-full mt-6">
              <p className="text-text-secundary font-title text-sm">
                En el Club Náutico Pergamino promovemos valores
              </p>
              <p className="text-text-secundary font-title text-sm">
                que nos acompañan dentro y fuera del agua.
              </p>
            </div>
          </div>

          {/* VALORES */}
          <div className="grid grid-cols-2 gap-8 my-10 w-[90vw]">
            <div className="flex flex-col justify-center items-center">
              <Image src={compañerismo} alt="Compañerismo" />
              <p className="text-text-secundary font-medium text-sm mt-4 text-center">
                COMPAÑERISMO
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={disiplina} alt="Disiplina" />
              <p className="text-text-secundary font-medium text-sm mt-4 text-center">
                DISIPLINA
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={respeto} alt="Respeto" />
              <p className="text-text-secundary font-medium text-sm mt-4 text-center">
                RESPETO
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={pasion} alt="Pasion" />
              <p className="text-text-secundary font-medium text-sm mt-4 text-center">
                PASIÓN
              </p>
            </div>
          </div>

          <section className="flex justify-center my-16 w-full px-4">
            <div className="relative flex flex-col w-full max-w-sm rounded-3xl overflow-hidden bg-background">
              {/* Imagen */}
              <div className="relative w-full h-[160px]">
                <Image src={flayer} alt="Club" fill className="object-cover" />

                {/* Degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-white/30 to-transparent" />
              </div>

              {/* Texto */}
              <div className="flex flex-col px-6 py-6">
                <h2 className="text-2xl font-title text-primary-text">
                  ¿LISTO PARA SER PARTE?
                </h2>

                <p className="mt-3 text-text-secondary text-sm">
                  Sumate a nuestra comunidad y disfrutá de todos los beneficios.
                </p>

                <button className="mt-5 w-fit bg-primary text-white px-5 py-2.5 rounded-lg font-title text-sm hover:scale-105 transition">
                  QUIERO SER SOCIO
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
