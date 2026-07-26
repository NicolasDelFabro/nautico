import Image from "next/image";
import Link from "next/link";
import flayer from "../../../../public/Landing.png";
import canotajeCard from "../../../../public/canotajeCard.png";
import ParaQuienes from "@/components/ParaQuienes";
import {
  FaDumbbell,
  FaRunning,
  FaHeartbeat,
  FaUsers,
} from "react-icons/fa";

import { FaCheck } from "react-icons/fa";

const FuncionalDesktop = () => {
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
                Funcional
              </span>

            </div>

            <div className="max-w-md">

              <h1 className="text-7xl font-black text-primary-text">
                FUNCIONAL
              </h1>

              <p className="mt-6 text-lg leading-8 text-primary-text">
                Entrenamientos dinámicos y completos <br />
                para mejorar tu fueraz, resistencia <br />
                y calidad dee vida.
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

        <div className="-mt-14 relative z-30 mx-auto grid max-w-7xl grid-cols-4 gap-10 px-8">

          {/* Card */}

          <div className="flex flex-col items-center text-center">

            <FaDumbbell size={50} color="white"/>

            <h3 className="mt-5 text-xl font-bold text-white">
              FUERZA
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
                Desarrolla tu fuera funcional <br />
                de manera efectiva.
            </p>

          </div>

          <div className="flex flex-col items-center text-center">

            <FaRunning size={50} color="white"/>

            <h3 className="mt-5 text-xl font-bold text-white">
              RESISTENCIA
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Mejorá tu capacidad fisica <br />
              y cardiovascular.
            </p>

          </div>

          <div className="flex flex-col items-center text-center">

            <FaHeartbeat size={50} color="white"/>

            <h3 className="mt-5 text-xl font-bold text-white">
              BIENESTAR
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Sentite mejor por dentro <br />
              y por fuera.
            </p>

          </div>

          <div className="flex flex-col items-center text-center">

            <FaUsers size={50} color="white"/>

            <h3 className="mt-5 text-xl font-bold text-white">
              COMUNIDAD
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Entrená en un ambiente <br />
              motivador y positivo.
            </p>

          </div>

        </div>

      </section>

      {/* SOBRE EL REMO */}        
        <section className="grid grid-cols-2 items-center bg-background py-4 w-full mx-auto">
          <div className="flex flex-col justify-start items-start px-10 gap-4">
            <h1 className="text-primary-text text-xl font-bold">
              SOBRE EL ENTRENAMIENTO FUNCIONAL
            </h1>

            <div className="flex flex-col gap-2">

              <div>
                <span>
                  El entrenamiento funcional trabaja movimiento naturales <br />
                  del cuerpo para mejorar tu condición fissica general.
                </span>
              </div>

              <div className="flex justify-start items-center">
                <FaCheck size={15} color="blue"/>
                <p className="text-primary-text font-semibold"> Ejercicios variado y dinamicos</p>
              </div>
              <div className="flex justify-start items-center">
                <FaCheck size={15} color="blue"/>
                <p className="text-primary-text font-semibold"> Adaptado a todos los niveles</p>
              </div>
              <div className="flex justify-start items-center">
                <FaCheck size={15} color="blue"/>
                <p className="text-primary-text font-semibold"> Mejora tu rendimiento diario</p>
              </div>
              <div className="flex justify-start items-center">
                <FaCheck size={15} color="blue"/>
                <p className="text-primary-text font-semibold"> Clases grupales motivadoras</p>
              </div>
            </div>
          </div>

          <div className="h-[300px]">
            <Image
              src={canotajeCard}
              alt="Bote de remo"
              className="w-[40vw] h-full rounded-xl shadow-2xl shadow-shadow"
            />
          </div>
        </section>

        {/* PARA QUIENES*/}
        <section className="w-full flex justify-center items-center bg-background">
            <ParaQuienes />
        </section>

        {/* CARRUSEL */}
        <section className="flex justify-center items-center w-full h-[400px] bg-primary">
          <div className="flex justify-center items-center w-[85vw] h-[300px] bg-background rounded-3xl">
            <h1 className="text-primary-text font-extrabold text-2xl"> CARRUSEL DE IMAGENES</h1>
          </div>
        </section>
    </>
  );
};

export default FuncionalDesktop;