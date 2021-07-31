import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image
                    className="image"
                    src="/daolist.svg"
                    alt="Landscape picture"
                    width={300}
                    height={70}
                />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>

        </nav>
        );
}

export default Navbar;
