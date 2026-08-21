import Link from "next/link";
import Image from "next/image";
import canotajeCard from "../../../public/canotajeCard.png";
import canotaje from "./../../../public/Canotaje.png";

const CanotajeCard = () => {
    return(
        <div className="flex flex-col w-[20vw] bg-background shadow shadow-lg shadow-shadow rounded-3xl pb-4">
                <div className="h-[200px]">
                  <Image
                    src={canotajeCard}
                    alt="Canotaje"
                    className="w-[100%] h-[200px] rounded-t-3xl"
                  />
                </div>
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-background rounded-[100%] mt-[-25px] mx-5 shadow shadow-2xl shadow-shadow">
                  <Image src={canotaje} alt="Canotaje" />
                </div>
                <div>
                  <h3 className="text-primary-text text-xl font-semibold mx-22 my-[-20px]">
                    KAYAK
                  </h3>
                </div>
                <div className="mx-5 mt-6 w-4xs">
                  <p className="text-primary-text font-regular pb-5">
                    Disfrutá de la aventura en el agua y supera tus limites.
                  </p>
                  <Link href="./deportes/kayak" className="m-5 py-5">
                    <p className="text-lg text-primary-text font-bold">
                      Ver más
                    </p>
                  </Link>
                </div>
              </div>
    )
}

export default CanotajeCard;