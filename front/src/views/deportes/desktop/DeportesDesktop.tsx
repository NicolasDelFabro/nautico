import Link from "next/link";

const DeportesDesktop = () => {
    return(
        <div>
            <Link href="./deportes/kayak"><p>KAYAK</p></Link>
            <Link href="./deportes/remo"><p>REMO</p></Link>
            <Link href="./deportes/funcional"><p>FUNCIONAL</p></Link>
        </div>
    )
}

export default DeportesDesktop;