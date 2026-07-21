import Image from "next/image";
import Link from "next/link";
import flayer from "../../../../public/Landing.png";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { PiCompassRoseBold } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";

const CanotajeDesktop = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[680px] overflow-hidden">

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
        <div className="relative z-20 flex h-full items-center">

          <div className="mx-auto w-full max-w-7xl px-8">

            {/* Breadcrumb */}
            <div className="mb-8 flex gap-2 text-sm text-primary-text/70">

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

            <div className="max-w-md">

              <h1 className="text-7xl font-black text-primary-text">
                KAYAK
              </h1>

              <p className="mt-6 text-lg leading-8 text-primary-text">
                Conectá con la naturaleza,
                superá tus límites y viví
                la aventura desde una
                perspectiva única.
              </p>

              <button className="mt-10 rounded-lg bg-primary px-8 py-4 font-semibold text-white transition hover:brightness-110">

                QUIERO PROBAR

              </button>

            </div>

          </div>

        </div>

        {/* Onda */}
        <svg
          className="absolute bottom-0 left-0 h-28 w-full h-55"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A2944"
            d="
            M0,90
            C180,150 420,20 720,90
            C980,160 1240,40 1440,90
            L1440,140
            L0,140
            Z"
          />
        </svg>

      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#0A2944] pb-20">

        <div className="-mt-12 relative z-30 mx-auto grid max-w-7xl grid-cols-4 gap-10 px-8">

          {/* Card */}

          <div className="flex flex-col items-center text-center">

            <PiCompassRoseBold size={50} color="white"/>

            <h3 className="mt-5 text-xl font-bold text-white">
              AVENTURA
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Explorá nuevos desafíos
              en cada recorrido.
            </p>

          </div>

          <div className="flex flex-col items-center text-center">

            <MdOutlineHealthAndSafety size={50} color="white"/>

            <h3 className="mt-5 text-xl font-bold text-white">
              SALUD
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Mejorá tu condición física
              mientras disfrutás.
            </p>

          </div>

          <div className="flex flex-col items-center text-center">

            <GrGroup size={50} color="white"/>

            <h3 className="mt-5 text-xl font-bold text-white">
              COMUNIDAD
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Formá parte de un grupo
              apasionado por el agua.
            </p>

          </div>

          <div className="flex flex-col items-center text-center">

            <AiOutlineSafety size={50} color="white"/>

            <h3 className="mt-5 text-xl font-bold text-white">
              SEGURIDAD
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Contamos con el mejor
              equipamiento para vos.
            </p>

          </div>

        </div>

      </section>
    </>
  );
};

export default CanotajeDesktop;