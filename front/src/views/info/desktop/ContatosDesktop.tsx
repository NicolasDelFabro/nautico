'use client'

import dynamic from "next/dynamic";
import Link from "next/link";

// En lugar de importar MapClub normalmente...
const MapClub = dynamic(
  () => import("@/components/MapClub"),
  {
    ssr: false,
  }
);

const ContactosDesktop = () => {
  return (
    <div className="flex justify-center items-center w-full h-[87vh]">
      <div className="grid grid-cols-2 w-[85vw] h-[80%] bg-shadow/20 rounded-2xl">
        {/* INFORMACIÓN */}
        <section className="flex flex-col justify-center px-20">
          <h2 className="text-3xl font-bold">
            CONTACTOS
          </h2>

          <div className="flex flex-col gap-4 mt-8
          text-lg font-regular">
            <Link href="https://www.google.com.ar/maps/place/Club+N%C3%A1utico+Pergamino/@-33.9039132,-60.578623,627m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95b9b5fdb5968f3b:0x6a50115ae9c8ec5a!8m2!3d-33.9039177!4d-60.5760481!16s%2Fg%2F11sq54yg_4?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D">
              <p>📍 Intendente Biscayart Sur 452</p>
            </Link>
            <p>📞 2477 202084</p>
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
    </div>
  );
};

export default ContactosDesktop;