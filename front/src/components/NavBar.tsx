import Image from "next/image";
import Link from "next/link";
import escudo from "../../public/logo.png";

const NavBar = () => {
  return (
    <>
      {/* Desktop */}
      <header className="hidden md:flex w-[100vw] h-[90px] bg-background shadow-sm">
        <div className="mx-auto w-full px-8 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="./">
              <Image
                src={escudo}
                alt="Escudo"
                width={70}
                height={70}
              />
            </Link>

            <div className="text-primary-text leading-tight">
              <p className="font-bold text-lg">CLUB NÁUTICO</p>
              <span className="text-sm">PERGAMINO</span>
            </div>
          </div>

          {/* Navegación */}
          <nav className="flex items-center gap-4 text-primary-text font-semibold mr-10">

            <Link href="/">INICIO</Link>

            <Link href="/deportes">DEPORTES</Link>

            <Link href="/historia">HISTORIA</Link>

            <Link href="/contacto">CONTACTOS</Link>

          </nav>

          {/* Botones */}
          {/* <div className="flex gap-3">

            <button
              className="border border-primary rounded-md px-5 py-2 text-sm font-semibold"
            >
              INGRESAR
            </button>

            <button
              className="bg-primary text-white rounded-md px-5 py-2 text-sm font-semibold"
            >
              REGISTRARSE
            </button>

          </div> */}

        </div>
      </header>

      {/* Mobile */}
      <header className="md:hidden">
        Vista Mobile
      </header>
    </>
  );
};

export default NavBar;