import Link from 'next/link'
import Image from "next/image";
import {Container, Nav, Row} from "react-bootstrap";

const cardStyle = {
    width: '100%',
    marginTop: '30px'
}

const imageStyle = {
    marginBottom: '40px'
}

const Navbar = () => {
    return (
        <Navbar>
            <Row className="justify-content-center">
                <Image
                    className=""
                    src="/daolist.svg"
                    alt="Landscape picture"
                    width={300}
                    height={70}
                />
            </Row>
            {/*<Link href="/"><a>Home</a></Link>*/}
            {/*<Link href="/about"><a>About</a></Link>*/}
            {/*<Link href="/ninjas"><a>Ninja Listing</a></Link>*/}

        </Navbar>
        );
}

export default Navbar;
