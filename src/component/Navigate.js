import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigate extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Inicio</Navbar.Brand>
                    <Nav className="mr-auto">

                        <Nav.Link href="/dondeEstamos">Donde Estamos</Nav.Link>
                        <Nav.Link href="/productos">Productos</Nav.Link>
                        <Nav.Link href="/detalleProducto"></Nav.Link>
                    </Nav>

                </Navbar>
            </React.Fragment>
        );
    }
}

export default Navigate;