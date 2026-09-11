import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/register"

import flayer from "../../../public/flayer.png";

const RegisterView = () => {
 return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={flayer}
        alt="Club Náutico"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001E3C]/70 via-[#001E3C]/20 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8">
        {/* Texto izquierdo */}
        <div className="max-w-lg text-white">
          <h1 className="text-6xl font-extrabold leading-tight">
            COMENZÁ
            <br />
            TU AVENTURA
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/90">
            Unite al Club Náutico Pergamino y disfrutá
            de todas nuestras actividades y beneficios.
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-md rounded-[30px] bg-white p-10 shadow-2xl">
          <h2 className="text-center text-4xl font-bold text-primary-text">
            Crear cuenta
          </h2>

          <p className="mt-3 text-center text-text-secundary">
            Completá tus datos para registrarte
          </p>

          <RegisterForm />

          {/* Separador */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-300" />
            <span className="text-sm text-slate-400">o</span>
            <div className="h-px flex-1 bg-slate-300" />
          </div>

          {/* Login */}
          <p className="text-center text-sm">
            ¿Ya tenés una cuenta?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterView;