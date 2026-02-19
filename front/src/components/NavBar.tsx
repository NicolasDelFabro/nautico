import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const NavBar = () => {
    return(
        <div className="grid grid-cols-3 items-center w-[100vw] h-[15vh] bg-(--primary)">
            <div className="flex justify-baseline">
                <div>
                    <button>
                        <Link href="./">
                            <Image src={logo} alt="logo" width={75} height={75} />
                        </Link>
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col">
                        <h1 className="text-2xl">Club Náutico</h1>
                        <h1 className="text-2xl">Pergamino</h1>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500 flex justify-center items-center">
                <Link href="./historia">
                    <span>
                        Historia
                    </span>
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <div className="mx-2">
                    <Link href="/login" className="bg-detalles">
                        <button className="bg-(--detalles)">
                            <p>Iniciar Sesion</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <button className="bg-(--detalles) px-1 py-1 rounded-2xl">
                        <Link href="/register">
                            <p className="text-(--primary) font-semibold">
                                Registrarse
                            </p>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;