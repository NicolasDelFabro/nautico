import MapClub from "@/components/MapClub";

const ContactosDesktop = () => {
  return (
    <div className="grid grid-cols-2 w-full h-auto">

      {/* INFORMACIÓN */}
      <section className="flex flex-col justify-center px-20">
        <h2 className="text-3xl font-bold">
          CONTACTOS
        </h2>

        <div className="flex flex-col gap-4 mt-8">
          <p>📍 Intendente Biscayart Sur 452</p>
          <p>📞 2477 557832</p>
          <p>✉️ clubnauticopergamino@gmail.com</p>
          <p></p>
        </div>
      </section>

      {/* MAPA */}
      <section className="flex justify-center items-center">
        <div className="w-[80%] h-[80%] bg-blue-800 rounded-2xl">
          <MapClub />
        </div>
      </section>

    </div>
  );
};

export default ContactosDesktop;