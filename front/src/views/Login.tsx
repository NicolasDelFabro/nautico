import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import flayer from "../../public/Header.png";

function LoginView() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src={flayer}
        alt="Club Náutico"
        fill
        priority
        className="w-full h-full object-cover block"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#001E3C]/70 via-[#001E3C]/20 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center justify-between px-8">

        {/* Texto izquierdo */}
        <div className="max-w-lg text-white">
          <h1 className="text-6xl font-extrabold leading-tight">
            NAVEGAMOS
            <br />
            JUNTOS DESDE 1978
          </h1>

          <p className="mt-6 text-lg text-white/90 leading-8">
            Un lugar para compartir, entrenar y disfrutar
            de la naturaleza.
          </p>
        </div>

        {/* Formulario */}
        <div className="w-full max-w-md rounded-[30px] bg-white p-10 shadow-2xl">
          <h2 className="text-center text-4xl font-bold text-primary-text">
            ¡Bienvenido!
          </h2>
          <p className="mt-3 text-center text-text-secundary">
            Ingresá a tu cuenta para continuar
          </p>

          <div className="mt-10">
            <label className="mb-2 block font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-medium">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="mt-5 flex items-center justify-between text-sm">
            {/* <label className="flex items-center gap-2">
              <input type="checkbox" />
              Recordarme
            </label> */}
            <Link
              href="/recuperar-password"
              className="text-primary hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            className="mt-8 w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:brightness-110"
          >
            INGRESAR
          </button>

          {/* Separador */}

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-300" />
            <span className="text-sm text-slate-400">
              o
            </span>
            <div className="h-px flex-1 bg-slate-300" />
          </div>

          {/* Google */}

          {/* <button
            className="w-full rounded-xl border border-slate-300 py-3 font-medium transition hover:bg-slate-50"
          >
            Continuar con Google
          </button> */}

          <p className="mt-8 text-center text-sm">
            ¿No tenés cuenta?{" "}
            <Link
              href="/register"
              className="font-semibold text-primary hover:underline"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginView;