import {Button, Offcanvas, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import Link from "next/link";
const Canvas = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className="mb-2" onClick={handleShow}>
                Add
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>DaoList</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ul">
                        <Link href="/new">
                            <ListGroup.Item as="li" active>
                            Add New Dao
                        </ListGroup.Item>
                        </Link>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
            </>
    )

}
export default Canvas
