import Link from 'next/link'
import Image from "next/image";
import {Col, Navbar, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";

const cardStyle = {
    width: '100%',
    marginTop: '30px'
}

const imageStyle = {
    marginBottom: '40px'
}

const Header = () => {
    return (
        <>
            <Navbar className="justify-content-center">
                <Row className="">
                    <Link href="/">
                    <Image
                        className=""
                        src="/daolist.svg"
                        alt="Daolist"
                        width={300}
                        height={40}
                    />
                    </Link>
                </Row>
                {/*<Link href="/"><a>Home</a></Link>*/}
                {/*<Link href="/about"><a>About</a></Link>*/}
                {/*<Link href="/ninjas"><a>Ninja Listing</a></Link>*/}

            </Navbar>
        </>
    );
}

export default Header;
