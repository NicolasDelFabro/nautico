import Image from "next/image";
import Link from "next/link";
import Header from "../../public/Landing/Header.png";
import Canotaje from "../../public/Landing/Canotaje.png";
import canotajeCard from "../../public/Landing/canotajeCard.png";
import remoCard from "../../public/Landing/remoCard.png";
import remo from "../../public/Landing/remo.png";
import funcionalCard from "../../public/Landing/funcionalCard.png";
import funcional from "../../public/Landing/funcional.png"
import compañerismo from "../../public/Landing/compañerismo.png";
import disiplina from "../../public/Landing/disiplina.png";
import respeto from "../../public/Landing/respeto.png";
import pasion from "../../public/Landing/pasion.png";
import flayer from "../../public/Landing/flayer.png";

const Landing = () => {
  return (
    <div>
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

              <h1 className="text-6xl font-bold text-primary-text">
                NAVEGAMOS   
                <br />
                JUNTOS DESDE 1978
              </h1>

              <p className="mt-6 text-primary-text leading font-semibold">
                Descubrí un espacio donde el deporte, la naturaleza y la
                amistad se encuentran.
              </p>

              <button className="mt-8 bg-primary px-7 py-3 rounded-md text-background font-semibold">
                CONOCÉ MÁS
              </button>

            </div>

          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center w-[100vw] bg-background">
        <h3 className="text-primary-text text-3xl font-bold my-10">
            ----- NUESTROS DEPORTES ----
        </h3>
          <div className="flex justify-center items-center w-[100vw]">
            <div className="grid grid-cols-3 gap-30 rounded-2xl">
            {/* CANOTAJE */}
            <div className="flex flex-col w-[18vw] bg-background shadow shadow-lg shadow-shadow rounded-3xl">
              <div className="h-[200px]">
                <Image src={canotajeCard} alt="Canotaje" className="w-[100%] h-[200px] rounded-t-3xl"/>
              </div>
              <div className="flex justify-center items-center w-[60px] h-[60px] bg-background rounded-[100%] mt-[-25px] mx-5 shadow shadow-2xl shadow-shadow">
                <Image src={Canotaje} alt="Canotaje"/>
              </div>
              <div>
                <h3 className="text-primary-text text-2xl font-bold mx-22 my-[-20px]">
                  KAYAK  
                </h3>
              </div>
              <div className="mx-5 mt-6 w-2xs">
                <p className="text-primary-text font-regular">
                  Disfrutá de la aventura en el agua y supera tus limites.
                </p>
                <Link href="./">
                  <p className="m-5 text-lg text-primary-text font-bold">
                    Ver más 
                  </p>
                </Link>
              </div>
            </div>

            {/* REMO */}
            <div className="flex flex-col w-[18vw] bg-background shadow shadow-lg shadow-shadow rounded-3xl">
              <div className="h-[200px]">
                <Image src={remoCard} alt="Canotaje" className="w-[100%] h-[200px] rounded-t-3xl"/>
              </div>
              <div className="flex justify-center items-center w-[60px] h-[60px] bg-background rounded-[100%] mt-[-25px] mx-5 shadow shadow-2xl shadow-white">
                <Image src={remo} alt="Canotaje"/>
              </div>
              <div>
                <h3 className="text-primary-text text-2xl font-bold mx-22 my-[-20px]">
                  REMO  
                </h3>
              </div>
              <div className="mx-5 mt-6 w-2xs">
                <p className="text-primary-text font-regular">
                  Disfrutá de la aventura en el agua y supera tus limites.
                </p>
                <Link href="./">
                  <p className="m-5 text-primary-text text-lg font-bold">
                    Ver más
                  </p>
                </Link>
              </div>
            </div>
            {/* FUNCIONAL */}
            <div className="flex flex-col w-[18vw] bg-background shadow shadow-lg shadow-shadow rounded-3xl">
              <div className="h-[200px]">
                <Image src={funcionalCard} alt="Canotaje" className="w-[100%] h-[200px] rounded-t-3xl"/>
              </div>
              <div className="flex justify-center items-center w-[60px] h-[60px] bg-background rounded-[100%] mt-[-25px] mx-5 shadow shadow-2xl shadow-white">
                <Image src={funcional} alt="Canotaje"/>
              </div>
              <div>
                <h3 className="text-primary-text text-2xl font-bold mx-22 my-[-20px]">
                  FUNCIONAL  
                </h3>
              </div>
              <div className="mx-5 mt-6 w-2xs">
                <p className="text-primary-text font-regular">
                  Disfrutá de la aventura en el agua y supera tus limites.
                </p>
                <Link href="./">
                  <p className="m-5 text-lg text-primary-text font-bold">
                    Ver más
                  </p>
                </Link>
              </div>
            </div>
          </div>
          </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[100vw] bg-linear-to-r from-primary to-secundary mt-12">
        <div className="flex flex-col justify-center items-center mt-12">
          <h3 className="text-text-secundary font-bold text-3xl">SOMOS COMUNIDAD</h3>
          <div className="flex flex-col items-center w-xl mt-6">
             <p className="text-text-secundary font-regular">En el Club Náutico Pergamino promovemos valores</p>
             <p className="text-text-secundary font-regular">que nos acompañan dentro y fuera del agua.</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-60 my-10">
          <div className="flex flex-col justify-center items-center">
            <Image src={compañerismo} alt="Compañerismo" />
            <p className="text-text-secundary font-medium text-lg mt-5">
              COMPAÑERISMO
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={disiplina} alt="Disiplina"/>
            <p className="text-text-secundary font-medium text-lg mt-5">
              DISIPLINA
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={respeto} alt="Respeto"/>
            <p className="text-text-secundary font-medium text-lg mt-5">
              RESPETO
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={pasion} alt="Pasion"/>
            <p className="text-text-secundary font-medium text-lg mt-5">
              PASIÓN
            </p>
          </div>
        </div>

        <section className="flex justify-center my-16">
  <div className="relative flex w-[90vw] max-w-7xl h-[260px] rounded-3xl overflow-hidden bg-background">

    {/* Imagen */}
    <div className="relative w-[60%] h-full">
      <Image
        src={flayer}
        alt="Club"
        fill
        className="object-cover"
      />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-background" />
    </div>

    {/* Texto */}
    <div className="flex flex-col justify-center px-12 flex-1">

      <h2 className="text-4xl font-bold text-primary-text">
        ¿LISTO PARA SER PARTE?
      </h2>

      <p className="mt-4 text-text-secondary max-w-sm">
        Sumate a nuestra comunidad y disfrutá de todos los beneficios.
      </p>

      <button
        className="mt-6 w-fit bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        QUIERO SER SOCIO
      </button>

    </div>

  </div>
</section>

      </div>
    </div>
  );
};

export default Landing;