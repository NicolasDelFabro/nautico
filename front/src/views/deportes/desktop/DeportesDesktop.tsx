import Link from "next/link";
import Image from "next/image";
import { CanotajeCardDesktop } from "@/components/Cards/CanotajeCard";
import { RemoCardDesktop } from "@/components/Cards/RemoCard";
import { FuncionalCardDesktop} from "@/components/Cards/FuncionalCard";
import Header from "../../../../public/Header.png"

// Íconos inline para "Más que deporte" (reemplazar por <Image> si ya tenés
// los assets en /public, ej. comunidad.png, disciplina.png, bienestar.png, superacion.png)
const IconUsers = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M15.5 20c0-2.6 1.6-4.7 4-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);

const IconShield = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
);

const IconHeart = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
            d="M12 20s-7-4.4-9.5-9C.7 7.6 2.4 4 6 4c2 0 3.4 1.1 4 2.2C10.6 5.1 12 4 14 4c3.6 0 5.3 3.6 3.5 7-2.5 4.6-9.5 9-9.5 9z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
    </svg>
);

const IconTrophy = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M7 4h10v4a5 5 0 01-10 0V4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7 5H4v1a4 4 0 003 3.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17 5h3v1a4 4 0 01-3 3.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 13v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 20v-1.5a3 3 0 016 0V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const IconAnchor = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 13c0 4 3.5 6.5 8 7 4.5-.5 8-3 8-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const VALUES = [
    { icon: IconUsers, title: "COMUNIDAD", text: "Un club, muchas historias compartidas." },
    { icon: IconShield, title: "DISCIPLINA", text: "Constancia y compromiso para crecer siempre." },
    { icon: IconHeart, title: "BIENESTAR", text: "Cuerpo y mente en equilibrio." },
    { icon: IconTrophy, title: "SUPERACIÓN", text: "Desafiamos nuestros límites cada día." },
];

const DeportesDesktop = () => {
    return(
        <div>
            <section className="relative h-[700px] w-full">
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
                                DEPORTES
                            </h1>
                            <p className="mt-6 text-primary-text leading font-semibold">
                                Descubri las dsciplinas que forman parte <br />
                                de nuestra comunidad. Desde quienes se inician <br />
                                hasta quienes compiten, hay un lugar para todos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        <div className="flex flex-col items-center text-center my-10">
            <h2 className="text-primary font-title text-4xl">
                NUESTROS DEPORTES
            </h2>
            <p className="text-primary text-lg font-normal mt-4">
                Tres disciplinas, una misma pasión. <br />
                Elegí el deporte que va con vos y emepza tu camino en el club.
            </p>
        </div>

        <section className="flex justify-center items-center my-10">
            <div className="grid grid-cols-3 gap-30 rounded-2xl">
              
              {/*CANOTAJE*/}
              <CanotajeCardDesktop />

              {/*REMO*/}
              <RemoCardDesktop />

              {/*FUNCIONAL*/}
              <FuncionalCardDesktop />
            </div>
        </section>

        {/* MÁS QUE DEPORTE */}
        <section className="bg-primary py-16 px-8 mt-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-title text-4xl text-background">
              MÁS QUE DEPORTE
            </h2>
            <p className="text-background text-lg font-normal mt-4">
              Formamos personas a través del deporte, en un entorno natural y en comunidad.
            </p>

            <div className="grid grid-cols-4 gap-16 mt-12 max-w-5xl">
              {VALUES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex flex-col items-center">
                  <Icon className="h-8 w-8 text-background mb-4" />
                  <h3 className="font-title text-sm text-background tracking-wide">
                    {title}
                  </h3>
                  <p className="text-background text-sm font-regular mt-2">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="flex flex-col items-center text-center py-16 px-8 bg-background">
          <IconAnchor className="h-7 w-7 text-primary mb-5" />
          <h2 className="font-title text-3xl text-primary">
            ¿QUERÉS FORMAR PARTE?
          </h2>
          <p className="text-primary-text text-lg font-normal mt-3">
            Te esperamos para que seas parte del Club.
          </p>
          <Link
            href="./contacto"
            className="mt-7 bg-primary text-background font-title text-sm px-8 py-4 rounded-full shadow shadow-lg shadow-shadow hover:opacity-90 transition-opacity"
          >
            CONTACTANOS
          </Link>
        </section>
        </div>
    )
}

export default DeportesDesktop;