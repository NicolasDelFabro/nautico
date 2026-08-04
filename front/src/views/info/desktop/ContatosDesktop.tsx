
'use client'

import dynamic from "next/dynamic";

// En lugar de importar MapClub normalmente...
const MapClub = dynamic(
  () => import("@/components/MapClub"),
  {
    ssr: false,
  }
);

const ContactosDesktop = () => {
  return (
    <div className="grid grid-cols-2 w-full h-[87vh]">

      {/* INFORMACIÓN */}
      <section className="flex flex-col justify-center px-20">
        <h2 className="text-3xl font-bold">
          CONTACTOS
        </h2>

        <div className="flex flex-col gap-4 mt-8">
          <p>📍 Intendente Biscayart Sur 452</p>
          <p>📞 2477 557832</p>
          <p>✉️ clubnauticopergamino@gmail.com</p>
        </div>
      </section>

      {/* MAPA */}
      <section className="flex justify-center items-center">
        <div className="w-[75%] h-[75%] p-1 bg-secundary rounded-2xl overflow-hidden">
          <MapClub />
        </div>
      </section>

    </div>
  );
};

export default ContactosDesktop;