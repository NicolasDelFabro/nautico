"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import escudo from "../../public/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "INICIO" },
    { href: "/deportes", label: "DEPORTES" },
    { href: "/historia", label: "HISTORIA" },
    { href: "/contacto", label: "CONTACTOS" },
  ];

  return (
    <>
      {/* Desktop */}
      <header className="hidden md:flex w-full h-[90px] bg-background shadow-sm">
        <div className="mx-auto w-full px-8 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="./">
              <Image src={escudo} alt="Escudo" width={70} height={70} />
            </Link>

            <div className="text-primary-text leading-tight">
              <p className="font-bold text-lg">CLUB NÁUTICO</p>
              <span className="text-sm">PERGAMINO</span>
            </div>
          </div>

          {/* Navegación */}
          <nav className="flex items-center gap-4 text-primary-text font-semibold mr-10">
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

        </div>
      </header>

      {/* Mobile */}
      <header className="md:hidden relative w-full h-[60px] bg-background shadow-sm">
        <div className="flex items-center justify-between h-full  px-5">

          {/* Logo */}
          <Link href="./" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Image src={escudo} alt="Escudo" width={45} height={45} />
            <div className="text-primary-text leading-tight">
              <p className="font-bold text-sm">CLUB NÁUTICO</p>
              <span className="text-xs">PERGAMINO</span>
            </div>
          </Link>

          {/* Botón hamburguesa */}
          <button
            className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-primary-text transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary-text transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary-text transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Menú desplegable */}
        {/* Mobile */}
<header className="md:hidden relative z-50 w-full bg-background shadow-sm">
  <div className="flex items-center justify-between px-5">
    {/* ...logo y botón... */}
  </div>

  {/* Menú desplegable */}
  <nav
    className={`absolute top-full left-0 w-full z-50 bg-background shadow-md flex flex-col items-center gap-y-5 py-6 text-primary-text font-semibold transition-all duration-300 ease-in-out ${
      isOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-4"
    }`}
  >
    {links.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="p-1"
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </Link>
    ))}
  </nav>
</header>
      </header>
    </>
  );
};

export default NavBar;