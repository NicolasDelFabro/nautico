import Image from "next/image";
import Link from "next/link";
import flayer from "../../public/Landing.png";
import canotajeCard from "../../public/canotajeCard.png"

import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { PiCompassRoseBold } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

const CanotajeView = () => {
  return (
    <>
      {/* =========================
            DESKTOP
      ========================= */}
<div>
      <div className="hidden lg:block w-[100vw]">

        {/* HERO */}
        <section className="relative min-h-[700px] overflow-hidden">

          {/* Imagen */}
          <Image
            src={flayer}
            alt="Kayak"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Degradado */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 via-35% to-transparent" />

          {/* Contenido */}
          <div className="relative z-20 flex min-h-[700px] items-center">

            <div className="mx-auto w-full max-w-7xl px-10">

              {/* Breadcrumb */}
              <div className="mb-10 flex items-center gap-2 text-sm text-primary-text/70">

                <Link href="/" className="hover:text-primary transition">
                  Inicio
                </Link>

                <span>›</span>

                <Link
                  href="/deportes"
                  className="hover:text-primary transition"
                >
                  Deportes
                </Link>

                <span>›</span>

                <span className="font-semibold text-primary-text">
                  Kayak
                </span>

              </div>

              {/* Texto */}

              <div className="max-w-lg">

                <h1 className="text-7xl font-black leading-none text-primary-text">
                  KAYAK
                </h1>

                <p className="mt-8 text-lg leading-8 text-primary-text">
                  Conectá con la naturaleza,
                  superá tus límites y viví la aventura
                  desde una perspectiva única.
                </p>

                <button
                  className="
                    mt-10
                    rounded-lg
                    bg-primary
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:scale-105
                    hover:brightness-110
                  "
                >
                  QUIERO PROBAR
                </button>

              </div>

            </div>

          </div>

          {/* Onda */}
          <svg
            className="absolute bottom-0 left-0 h-40 w-full"
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
          >
            <path
              fill="#01233F"
              d="
                M0,90
                C180,150 420,20 720,90
                C980,160 1240,40 1440,90
                L1440,140
                L0,140
                Z
              "
            />
          </svg>

        </section>

        {/* BENEFICIOS */}

        <section className="bg-primary pb-24">

          <div className="relative z-30 mx-auto grid max-w-7xl grid-cols-4 gap-16 px-10">

            {/* Aventura */}

            <div className="flex flex-col items-center text-center">

              <PiCompassRoseBold
                size={50}
                className="text-white"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                AVENTURA
              </h3>

              <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/80">
                Explorá nuevos desafíos
                en cada recorrido.
              </p>

            </div>

            {/* Salud */}

            <div className="flex flex-col items-center text-center">

              <MdOutlineHealthAndSafety
                size={50}
                className="text-white"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                SALUD
              </h3>

              <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/80">
                Mejorá tu condición física
                mientras disfrutás.
              </p>

            </div>

            {/* Comunidad */}

            <div className="flex flex-col items-center text-center">

              <GrGroup
                size={50}
                className="text-white"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                COMUNIDAD
              </h3>

              <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/80">
                Formá parte de un grupo
                apasionado por el agua.
              </p>

            </div>

            {/* Seguridad */}

            <div className="flex flex-col items-center text-center">

              <AiOutlineSafety
                size={50}
                className="text-white"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                SEGURIDAD
              </h3>

              <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/80">
                Contamos con el mejor
                equipamiento para vos.
              </p>

            </div>

          </div>

          {/*SOBRE EL CANOTAJE*/}
          <div className="flex justify-around items-center bg-background mt-14 py-8">
            <div className="flex flex-col justify-start">
              <h2 className="text-primary font-bold text-xl">
                SOBRE EL KAYAK
              </h2>
              <p className="ml-3 pb-2 text-lg text-primary-text">
                El kayak es un deporte  náutico que combina técnica, fuerza y resistencia. <br />
                En el Club Náutico Pergamino ofrecemos entrenamientos para todas las <br />
                edades y niveles, desde principiantes hasta competidorers.
              </p>
              <div className="flex flex-col text-primary-text font-semibold ml-3">
                <div className="flex justify-start my-1 items-center">
                  <FaCheck size={15} color="blue"/>
                  <p className="ml-3">Botes individuales y colectivos.</p>
                </div>
                <div className="flex justify-start my-1 items-center">
                  <FaCheck size={15} color="blue"/>
                  <p className="ml-3">Entrenamiento para todos los niveles.</p>
                </div>
                <div className="flex justiy-start  my-1 items-center">
                  <FaCheck size={15} color="blue"/>
                  <p className="ml-3">Competencias locals y nacionales.</p>
                </div>
                <div className="flex justify-start my-1 items-center">
                  <FaCheck size={15} color="blue"/>
                  <p className="ml-3">Un deporte para toda la familia.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[40vw] h-[200px]">
              <Image className="h-[200px] rounded-xl shadow-2xl shadow-shadow"
            src={canotajeCard}
            alt="Kayak"
          />
            </div>
          </div>

          {/* CARRUSEL DE IMAGENES */}
          <div className="flex justify-center items-center bg-background w-[100vw] h-[300px]">
            <div className="flex justify-center items-center bg-background shadow-2xl shadow-shadow w-[90vw] h-[250px] rounded-3xl">
                <h1 className="text-primary-text text-lg font-bold">CARRUSEL DE IMAGENES</h1>
            </div>
          </div>
        </section>

      </div>

      {/* ========================= MOBILE ========================= */}

<div className="block lg:hidden">

  {/* HERO */}
  <section className="relative h-[500px] overflow-hidden">

    <Image
      src={flayer}
      alt="Kayak"
      fill
      priority
      className="object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Degradado */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

    {/* Contenido */}
    <div className="relative z-20 flex h-full items-end pb-20 px-6">

      <div className="w-full">

        {/* Breadcrumb */}
        <div className="mb-4 flex justify-center gap-2 text-xs text-primary-text/80">

          <Link href="/">Inicio</Link>

          <span>›</span>

          <Link href="/deportes">
            Deportes
          </Link>

          <span>›</span>

          <span className="font-semibold">
            Kayak
          </span>

        </div>

        {/* Título */}

        <h1 className="text-center text-5xl font-black text-primary-text">
          KAYAK
        </h1>

        <p className="mt-5 text-center text-sm leading-7 text-primary-text">

          Conectá con la naturaleza,
          descubrí nuevos desafíos y
          disfrutá del río junto a
          nuestra comunidad.

        </p>

        <button
          className="
            mt-8
            w-full
            rounded-xl
            bg-primary
            py-4
            font-semibold
            text-white
            transition
            hover:brightness-110
          "
        >
          QUIERO PROBAR
        </button>

      </div>

    </div>

    {/* Onda */}

    <svg
      className="absolute bottom-0 left-0 h-20 w-full"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
    >
      <path
        fill="#01233F"
        d="
          M0,90
          C180,150 420,20 720,90
          C980,160 1240,40 1440,90
          L1440,140
          L0,140
          Z
        "
      />
    </svg>

  </section>

  {/* BENEFICIOS */}

  <section className="bg-primary pb-14 pt-10">

    <div className="grid grid-cols-2 gap-y-10 gap-x-6 px-6">

      {/* Aventura */}

      <div className="flex flex-col items-center text-center">

        <PiCompassRoseBold
          size={42}
          className="text-white"
        />

        <h3 className="mt-4 text-lg font-bold text-white">
          AVENTURA
        </h3>

        <p className="mt-2 text-xs leading-6 text-white/80">
          Explorá nuevos
          desafíos.
        </p>

      </div>

      {/* Salud */}

      <div className="flex flex-col items-center text-center">

        <MdOutlineHealthAndSafety
          size={42}
          className="text-white"
        />

        <h3 className="mt-4 text-lg font-bold text-white">
          SALUD
        </h3>

        <p className="mt-2 text-xs leading-6 text-white/80">
          Mejorá tu
          condición física.
        </p>

      </div>

      {/* Comunidad */}

      <div className="flex flex-col items-center text-center">

        <GrGroup
          size={42}
          className="text-white"
        />

        <h3 className="mt-4 text-lg font-bold text-white">
          COMUNIDAD
        </h3>

        <p className="mt-2 text-xs leading-6 text-white/80">
          Compartí la
          experiencia.
        </p>

      </div>

      {/* Seguridad */}

      <div className="flex flex-col items-center text-center">

        <AiOutlineSafety
          size={42}
          className="text-white"
        />

        <h3 className="mt-4 text-lg font-bold text-white">
          SEGURIDAD
        </h3>

        <p className="mt-2 text-xs leading-6 text-white/80">
          Equipamiento
          certificado.
        </p>

      </div>

    </div>

  </section>

</div>
    </div>
    </>
  );
};

export default CanotajeView;