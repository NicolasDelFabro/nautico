"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Cerrar menú al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative grid grid-cols-2 items-center w-full h-[15vh] bg-[var(--primary)] sm:h-[6vh] lg:h-[11vh]">

      {/* LOGO + TITULO */}
      <div className="flex items-center w-[80vw] pl-4 pt-2">
        <Link href="./" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            className="lg:w-[75px] lg:h-[75px] sm:w-[25px] h-[70px]"
          />
        </Link>
          <div className="flex flex-col w-[80vw]">
            <h1 className="lg:text-3xl sm:text-lg">Club Náutico</h1>
            <h1 className="lg:text-3xl sm:text-lg">Pergamino</h1>
          </div>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex justify-end items-center gap-4 pr-6">
        <Link href="./historia" className="px-3 py-2 hover:bg-secondary rounded-2xl">
          Historia
        </Link>
        <Link href="./nosotrros" className="px-3 py-2 hover:bg-secondary rounded-2xl">
          Quiénes somos
        </Link>
        <Link href="./calendario" className="px-3 py-2 hover:bg-secondary rounded-2xl">
          Calendario
        </Link>
        <Link href="./login" className="px-3 py-2 hover:bg-secondary rounded-2xl">
          Iniciar sesión
        </Link>
        <Link href="./register" className="px-3 py-2 hover:bg-secondary rounded-2xl">
          Registrarse
        </Link>
      </div>

      {/* BOTÓN MOBILE */}
      <div className="flex justify-end md:hidden pr-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full w-[100vw] bg-[var(--primary)]/85 shadow-lg p-4 flex flex-col gap-3 text-lg md:hidden"
        >
          <Link href="./login" onClick={() => setIsOpen(false)}>
            Iniciar sesión
          </Link>
          <Link href="./register" onClick={() => setIsOpen(false)}>
            Registrarse
          </Link>
          <Link href="./historia" onClick={() => setIsOpen(false)}>
            Historia
          </Link>
          <Link href="./nosotros" onClick={() => setIsOpen(false)}>
            Quiénes somos
          </Link>
          <Link href="./calendario" onClick={() => setIsOpen(false)}>
            Calendario
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;