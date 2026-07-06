import react from "react";
import Image from "next/image";
import escudo from "../../public/logo.png";

const NavBar = () => {
    return(
        <div>
            <div className="hidden:md flex justify-between">
                <div className="grid grid-cols-2">
                    <div className="flex items-center justify-center">
                        <Image src={escudo} alt="escudo" width={80} height={80}/>
                    </div>
                    <div className="flex flex-col justify-center text-primary-text">
                        <p>Club Náutico</p>
      a                  <h4>pergamino</h4>
                    </div>

                    <div className="flex justify-around items-center">

                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <h1>VISTA MOBILE</h1>
            </div>
        </div>
    )
}

export default NavBar;