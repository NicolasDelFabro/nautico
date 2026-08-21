import Link from "next/link";
import Image from "next/image";
import remoCard from "../../../public/remoCard.png";
import remo from "../../../public/remo.png";

const RemoCard = () => {
    return(
        <div className="flex flex-col w-[20vw] bg-background shadow shadow-lg shadow-shadow rounded-3xl pb-4">
                <div className="h-[200px]">
                  <Image
                    src={remoCard}
                    alt="Remo"
                    className="w-[100%] h-[200px] rounded-t-3xl"
                  />
                </div>
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-background rounded-[100%] mt-[-25px] mx-5 shadow shadow-2xl shadow-white">
                  <Image src={remo} alt="Remo" />
                </div>
                <div>
                  <h3 className="text-primary-text text-xl font-semibold mx-22 my-[-20px]">
                    REMO
                  </h3>
                </div>
                <div className="mx-5 mt-6 w-4xs">
                  <p className="text-primary-text font-regular pb-5">
                    Trabajo en equipo, tecnica y pasión por el remo.
                  </p>
                  <Link href="./deportes/remo" className="m-5">
                    <p className="text-primary-text text-lg font-bold">
                      Ver más
                    </p>
                  </Link>
                </div>
              </div>
    )
}

export default RemoCard;