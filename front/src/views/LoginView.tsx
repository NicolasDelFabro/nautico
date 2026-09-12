'use client'

import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";
import Image from "next/image";
import Header from "../../public/Header.png"

const LoginView = () => {
    return(
        <div className="">
          <div className="hidden md:block">
            <section className="relative h-[700px] w-[100vw]">
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
                <div className="max-w-7xl mx-auto w-full px-8 flex items-center justify-between">
                  {/* Texto izquierdo */}
                  <div className="max-w-xl">
                    <h1 className="text-6xl font-title text-terciario">
                      NAVEGAMOS
                      <br />
                      JUNTOS DESDE 1978
                    </h1>
                    <p className="mt-6 text-terciario leading font-semibold">
                      Descubrí un espacio donde el deporte, la naturaleza y la
                      amistad se encuentran.
                    </p>
                  </div>

                  {/* Card de login */}
                  <div className="w-full max-w-md rounded-[30px] bg-white p-10 shadow-2xl">
                    <h2 className="text-center text-4xl font-bold text-primary-text">
                      Iniciar sesión
                    </h2>
                    <p className="mt-3 text-center text-text-secundary">
                      Ingresá con tu DNI y contraseña
                    </p>
                    <div className="mt-8">
                      <LoginForm />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* VISTA MOBILE */}
          <div className="block md:hidden">
            <section className="relative h-[500px] w-[100vw]">
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
                <div className="w-full px-6">
                  <div className="max-w-xl">
                    <h1 className="text-3xl font-title text-primary-text leading-tight">
                      NAVEGAMOS
                      <br />
                      JUNTOS DESDE 1978
                    </h1>

                    <p className="mt-4 text-primary-text font-semibold text-sm">
                      Descubrí un espacio donde el deporte, la naturaleza y la
                      amistad se encuentran.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Card de login, debajo del hero en mobile */}
            <div className="w-full px-6 -mt-10 relative z-10">
              <div className="w-full rounded-[30px] bg-white p-8 shadow-2xl">
                <h2 className="text-center text-3xl font-bold text-primary-text">
                  Iniciar sesión
                </h2>
                <p className="mt-2 text-center text-text-secundary text-sm">
                  Ingresá con tu DNI y contraseña
                </p>
                <div className="mt-6">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default LoginView;