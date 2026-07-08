import Image from "next/image";
import Link from "next/link";
import Header from "../../public/Header.png";

const Landing = () => {
  return (
    <section className="relative h-[700px] w-[100vw]">

      {/* Imagen */}
      <Image
        src={Header}
        alt="Club Náutico"
        fill
        priority
        className="object-cover"
      />

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
  );
};

export default Landing;