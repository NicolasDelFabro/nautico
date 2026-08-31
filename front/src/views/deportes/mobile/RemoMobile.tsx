import Image from "next/image";
import Link from "next/link";
import flayer from "../../../../public/Landing.png";
import canotajeCard from "../../../../public/canotajeCard.png";
import ParaQuienesMobile from "@/components/mobile/ParaQuienesMobile";
import {
  FaUsers,
  FaBullseye,
  FaDumbbell,
  FaMountain,
  FaCheck,
} from "react-icons/fa";

const BENEFICIOS = [
  {
    icon: FaUsers,
    title: "TRABAJO EN EQUIPO",
    text: "La fuerza del grupo nos lleva lejos.",
  },
  {
    icon: FaBullseye,
    title: "DISCIPLINA",
    text: "Constancia y dedicación en cada entrenamiento.",
  },
  {
    icon: FaDumbbell,
    title: "FUERZA",
    text: "Desarrollá todo tu potencial físico y mental.",
  },
  {
    icon: FaMountain,
    title: "SUPERACIÓN",
    text: "Cada día es una nueva oportunidad para mejorar.",
  },
];

const BULLETS = [
  "Botes individuales y colectivos",
  "Entrenamientos para todos los niveles",
  "Competencias locales y regionales",
  "Un deporte para toda la vida",
];

const RemoMobile = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[560px] overflow-hidden">
        <Image
          src={flayer}
          alt="Remo"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 via-25% to-transparent" />

        <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-16">
          {/* Breadcrumb */}
          <div className="mb-4 flex gap-2 text-xs text-primary-text/70">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <Link href="/deportes">Deportes</Link>
            <span>›</span>
            <span className="font-semibold">Remo</span>
          </div>

          <h1 className="text-5xl font-black text-primary-text">
            REMO
          </h1>

          <p className="mt-4 text-base leading-7 text-primary-text">
            Trabajo en equipo, disciplina y pasión por el agua. Remamos
            juntos hacia nuevas metas.
          </p>

          <button className="mt-8 self-start rounded-lg bg-primary px-7 py-3.5 font-semibold text-sm text-white transition hover:brightness-110">
            QUIERO PROBAR
          </button>
        </div>

        {/* Onda */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16"
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
      <section className="bg-[#0A2944] pb-16">
        <div className="-mt-10 relative z-30 mx-auto grid grid-cols-2 gap-x-6 gap-y-10 px-6 max-w-md">
          {BENEFICIOS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <Icon size={36} color="white" />
              <h3 className="mt-4 text-base font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-white/80">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE EL REMO */}
      <section className="flex flex-col bg-background py-10 px-6">
        <div className="w-full">
          <Image
            src={canotajeCard}
            alt="Bote de remo"
            className="w-full h-[220px] object-cover rounded-xl shadow-2xl shadow-shadow"
          />
        </div>

        <div className="flex flex-col items-start gap-4 mt-8">
          <h2 className="text-primary-text text-xl font-bold">
            SOBRE EL REMO
          </h2>

          <p className="text-primary-text text-sm leading-6">
            El remo es un deporte de equipo que exige coordinación, fuerza
            y resistencia. En el Club Náutico Pergamino contamos con
            embarcaciones modernas y entrenadores especializados.
          </p>

          <div className="flex flex-col gap-3 mt-1">
            {BULLETS.map((bullet) => (
              <div key={bullet} className="flex items-center gap-2">
                <FaCheck size={13} color="blue" className="shrink-0" />
                <p className="text-primary-text text-sm font-semibold">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIENES */}
      <section className="w-full flex justify-center items-center bg-background">
        <ParaQuienesMobile />
      </section>

      {/* CARRUSEL */}
      <section className="flex justify-center items-center w-full h-[300px] bg-primary px-6">
        <div className="flex justify-center items-center w-full h-[240px] bg-background rounded-3xl">
          <h1 className="text-primary-text font-extrabold text-lg text-center px-4">
            CARRUSEL DE IMAGENES
          </h1>
        </div>
      </section>
    </>
  );
};

export default RemoMobile;