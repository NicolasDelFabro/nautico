import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const NavBar = () => {
    return(
        <div className="grid grid-cols-2 justify-between items-center w-[100vw] h-[15vh] bg-(--primary)">
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

            <div className="flex justify-end-safe items-center">
                <div className="mr-15">
                    <Link href="./historia"
                    className="px-2 py-3
                    hover:bg-secondary rounded-3xl hover:shadow-md hover:shadow-black">
                        <span>
                            Historia
                        </span>
                    </Link>
                </div>
                <div className="flex justify-center items-center mr-10">
                    <div className="mx-2">
                        <button className="bg-details px-2 py-3 rounded-3xl opacity-85
                        hover:opacity-100 hover:shadow-md hover:shadow-black">
                            <Link href="login">
                                <p className="text-primary font-semibold">
                                    Iniciar Sesion
                                </p>
                            </Link>
                        </button>
                    </div>
                    <div>
                        <button className="bg-details px-2 py-3 rounded-3xl opacity-85
                        hover:opacity-100 hover:shadow-md hover:shadow-black">
                            <Link href="/register">
                                <p className="text-primary font-semibold">
                                    Registrarse
                                </p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;