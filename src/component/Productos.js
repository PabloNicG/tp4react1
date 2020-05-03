import React, {Component} from 'react';
import Navigate from "./Navigate";
import {instrumentos} from '../datos/instrumentos.json';
import Tarjeta from "./Tarjeta";
import {Col, Row, Container, Alert} from "react-bootstrap";


class Productos extends Component {

    constructor() {
        super();
        this.state = {instrumentos}
    }


    render() {

        const instrumentos = this.state.instrumentos.map((instrumentos, i) => {
            return (
                <Tarjeta id={instrumentos.id} instrumento={instrumentos.instrumento} marca={instrumentos.marca}
                         modelo={instrumentos.modelo} imagen={instrumentos.imagen} precio={instrumentos.precio}
                         costoEnvio={instrumentos.costoEnvio} cantidadVendida={instrumentos.cantidadVendida}
                         descripcion={instrumentos.descripcion}></Tarjeta>
            )
        })
        //Estos son los datos que va a contener mi tarjeta
        return (
            <React.Fragment>
                <Navigate></Navigate>

                <Container>
                    <br/>
                    <hr/>

                    <Alert variant="secondary">
                        <h2 className="titulo" ALIGN="center">Productos</h2>
                    </Alert>
                    <hr/>
                    {/*Uso este alert como fondo para el titulo "productos"*/}

                    <Col>
                        <Row xs={3} md={4}>
                            {instrumentos}
                        </Row>
                    </Col>
                </Container>

            </React.Fragment>
        );
    }
}

export default Productos;