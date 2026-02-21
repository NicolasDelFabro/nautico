import Image from "next/image";
import landing from "../../public/Landing.png";


const Landing = () => {
    return(
        <div className="flex flex-col items-center w-[100vw] min-h-screen bg-(--background)">
            <Image src={landing} alt="Imagen de un rio con arboles"/>
        </div>
    )
}

export default Landing;