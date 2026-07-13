import Link from "next/link";
import Image from "next/image";
import escudo from "../../public/logo.png"
import instagram from "../../public/instagram.png";
import whatsapp from "../../public/whatsapp.png";
import facebook from "../../public/facebook.png";

// const Footer = () => {
//     return(
//         <div className="flex flex-col-4 justify-between w-[100vw] bg-primary py-5">
//             <div className="flex items-start gap-3 mx-10">
//             <Image
//               src={escudo}
//               alt="Escudo"
//               width={70}
//               height={70}
//             />

//             <div className="text-text-secundary leading-tight">
//               <p className="font-bold text-lg">CLUB NÁUTICO</p>
//               <span className="text-sm">PERGAMINO</span>
//             </div>
//           </div>

//             <div className="flex flex-col justify-start items-center">
//                 <div>
//                     <h3 className="text-xl font-bold text-text-secundary">
//                         NAVEGACIÓN
//                     </h3>
//                 </div>
//                 <div className="flex flex-col justify-center items-center
//                 text-text-secundary text-lg font-medium">
//                     <Link href="./" className="p-1">Inicio</Link>
//                     <Link href="./" className="p-1">Deportes</Link>
//                     <Link href="./" className="p-1">Historia</Link>
//                     <Link href="./"className="p-1">Contactos</Link>
//                 </div>
//             </div>

//             <div className="flex flex-col justify-start items-center">
//                 <div>
//                     <h3 className="text-xl font-bold text-text-secundary">
//                         INFORMACIÓN
//                     </h3>
//                 </div>
//                 <div className="flex flex-col justify-center items-center
//                 text-text-secundary text-lg font-medium">
//                     <Link href="./" className="p-1">Registrarse</Link>
//                     <Link href="./" className="p-1">Cuotas</Link>
//                     <Link href="./" className="p-1">Preguntas frecuentes</Link>
//                 </div>
//             </div>
            
//             <div className="flex flex-col justify-start items-center pr-10">
//                 <div>
//                     <h3 className="text-xl font-bold text-text-secundary">
//                         CONTACTOS
//                     </h3>
//                 </div>
//                 <div className="flex flex-col justify-center items-center
//                 text-text-secundary text-lg font-medium">
//                     <Link href="./" className="p-1">+54 2477557832</Link>
//                     <Link href="./deportes" className="p-1">clubnauticopergamino@gmail.com</Link>
//                 </div>
//                 <div className="grid grid-cols-3 gap-6 justify-center items-center mt-3">
//                     <Link href="./">
//                     <Image src={instagram} alt="Instagram"/>
//                     </Link>

//                     <Link href="./">
//                         <Image src={whatsapp} alt="Whatsapp"/>
//                     </Link>

//                     <Link href="./">
//                         <Image src={facebook} alt="Facebook"/>
//                     </Link>
//                 </div>
//             </div>

//             {/* Footer Mobile */}
// <div className="md:hidden flex flex-col items-center gap-8 w-full bg-primary py-8 px-6">

//   {/* Logo */}
//   <div className="flex flex-col items-center gap-2 text-center">
//     <Image src={escudo} alt="Escudo" width={60} height={60} />
//     <div className="text-text-secundary leading-tight">
//       <p className="font-bold text-lg">CLUB NÁUTICO</p>
//       <span className="text-sm">PERGAMINO</span>
//     </div>
//   </div>

//   {/* Navegación */}
//   <div className="flex flex-col items-center gap-2 text-center">
//     <h3 className="text-lg font-bold text-text-secundary">NAVEGACIÓN</h3>
//     <div className="flex flex-col items-center text-text-secundary text-base font-medium">
//       <Link href="./" className="p-1">Inicio</Link>
//       <Link href="./" className="p-1">Deportes</Link>
//       <Link href="./" className="p-1">Historia</Link>
//       <Link href="./" className="p-1">Contactos</Link>
//     </div>
//   </div>

//   {/* Información */}
//   <div className="flex flex-col items-center gap-2 text-center">
//     <h3 className="text-lg font-bold text-text-secundary">INFORMACIÓN</h3>
//     <div className="flex flex-col items-center text-text-secundary text-base font-medium">
//       <Link href="./" className="p-1">Registrarse</Link>
//       <Link href="./" className="p-1">Cuotas</Link>
//       <Link href="./" className="p-1">Preguntas frecuentes</Link>
//     </div>
//   </div>

//   {/* Contactos */}
//   <div className="flex flex-col items-center gap-2 text-center">
//     <h3 className="text-lg font-bold text-text-secundary">CONTACTOS</h3>
//     <div className="flex flex-col items-center text-text-secundary text-base font-medium">
//       <Link href="./" className="p-1">+54 2477557832</Link>
//       <Link href="./deportes" className="p-1">clubnauticopergamino@gmail.com</Link>
//     </div>
//     <div className="flex flex-row gap-6 justify-center items-center mt-2">
//       <Link href="./"><Image src={instagram} alt="Instagram" /></Link>
//       <Link href="./"><Image src={whatsapp} alt="Whatsapp" /></Link>
//       <Link href="./"><Image src={facebook} alt="Facebook" /></Link>
//     </div>
//   </div>

// </div>
//         </div>
//     )
// }

// export default Footer;

const Footer = () => {
    return (
        <>
            {/* Footer Desktop */}
            <div className="hidden md:flex justify-between w-full bg-primary py-5">
                <div className="flex items-start gap-3 mx-10">
                    <Image src={escudo} alt="Escudo" width={70} height={70} />
                    <div className="text-text-secundary leading-tight">
                        <p className="font-bold text-lg">CLUB NÁUTICO</p>
                        <span className="text-sm">PERGAMINO</span>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center">
                    <h3 className="text-xl font-bold text-text-secundary">NAVEGACIÓN</h3>
                    <div className="flex flex-col justify-center items-center text-text-secundary text-lg font-medium">
                        <Link href="./" className="p-1">Inicio</Link>
                        <Link href="./" className="p-1">Deportes</Link>
                        <Link href="./" className="p-1">Historia</Link>
                        <Link href="./" className="p-1">Contactos</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center">
                    <h3 className="text-xl font-bold text-text-secundary">INFORMACIÓN</h3>
                    <div className="flex flex-col justify-center items-center text-text-secundary text-lg font-medium">
                        <Link href="./" className="p-1">Registrarse</Link>
                        <Link href="./" className="p-1">Cuotas</Link>
                        <Link href="./" className="p-1">Preguntas frecuentes</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center pr-10">
                    <h3 className="text-xl font-bold text-text-secundary">CONTACTOS</h3>
                    <div className="flex flex-col justify-center items-center text-text-secundary text-lg font-medium">
                        <Link href="./" className="p-1">+54 2477557832</Link>
                        <Link href="./deportes" className="p-1">clubnauticopergamino@gmail.com</Link>
                    </div>
                    <div className="grid grid-cols-3 gap-6 justify-center items-center mt-3">
                        <Link href="./"><Image src={instagram} alt="Instagram" /></Link>
                        <Link href="./"><Image src={whatsapp} alt="Whatsapp" /></Link>
                        <Link href="./"><Image src={facebook} alt="Facebook" /></Link>
                    </div>
                </div>
            </div>

            {/* Footer Mobile */}
            <div className="flex md:hidden flex-col items-center gap-8 w-full bg-primary py-8 px-6">
                <div className="flex flex-col items-center gap-2 text-center">
                    <Image src={escudo} alt="Escudo" width={60} height={60} />
                    <div className="text-text-secundary leading-tight">
                        <p className="font-bold text-lg">CLUB NÁUTICO</p>
                        <span className="text-sm">PERGAMINO</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-center">
                    <h3 className="text-lg font-bold text-text-secundary">NAVEGACIÓN</h3>
                    <div className="flex flex-col items-center text-text-secundary text-base font-medium">
                        <Link href="./" className="p-1">Inicio</Link>
                        <Link href="./" className="p-1">Deportes</Link>
                        <Link href="./" className="p-1">Historia</Link>
                        <Link href="./" className="p-1">Contactos</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-center">
                    <h3 className="text-lg font-bold text-text-secundary">INFORMACIÓN</h3>
                    <div className="flex flex-col items-center text-text-secundary text-base font-medium">
                        <Link href="./" className="p-1">Registrarse</Link>
                        <Link href="./" className="p-1">Cuotas</Link>
                        <Link href="./" className="p-1">Preguntas frecuentes</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-center">
                    <h3 className="text-lg font-bold text-text-secundary">CONTACTOS</h3>
                    <div className="flex flex-col items-center text-text-secundary text-base font-medium">
                        <Link href="./" className="p-1">+54 2477557832</Link>
                        <Link href="./deportes" className="p-1">clubnauticopergamino@gmail.com</Link>
                    </div>
                    <div className="flex flex-row gap-6 justify-center items-center mt-2">
                        <Link href="./"><Image src={instagram} alt="Instagram" /></Link>
                        <Link href="./"><Image src={whatsapp} alt="Whatsapp" /></Link>
                        <Link href="./"><Image src={facebook} alt="Facebook" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;