import React, {Component} from 'react';
import {instrumentos} from '../datos/instrumentos.json';
import Navigate from "./Navigate";
import {Alert, Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";


class DetalleProducto extends Component {

    constructor() {
        super();
        this.state = {instrumentos}
    }

    render() {
        console.log(this.props);
        const parametroId = this.props.match.params.id;
        const instEncontrado = instrumentos.filter((instrumentos) => instrumentos.id === parametroId);
        //filter retorna array [0] de un solo elemento. filtro el json y que muestre los o el instrumento
        //que coincida con el parametroId recuperado- Esta constante es un array de un solo elemento

        /*
        const instrumentos = instEncontrado[0].instrumentos.map((detalle, i )=>{return( <li key={i}>{instrumentos}</li>)})
        -Esta linea como se muestra en el ejemplo no se utiliza, ya que el detalle es un texto y no un array
        *
        */
        return (
            <React.Fragment>
                <Navigate></Navigate>


                <Card className="tarjetaDetalle">

                    <Container>
                        <br/>
                        <Alert variant="secondary">
                            <h2 className="titulo" ALIGN="center">Detalle del Producto</h2>
                        </Alert>
                        <br/>
                        <Row xs={1} md={2}>

                            <ListGroup>

                                <Col>
                                    <ListGroup.Item>
                                        <img className="imgDetalle"
                                             src={require(`../assets/images/${instEncontrado[0].imagen}`)}></img>
                                        <h6 className="descripcion">
                                            <br/>
                                            <hr/>
                                            <u><b>Descripción:</b></u>
                                            <br/>
                                            <br/>
                                            {instEncontrado[0].descripcion}
                                        </h6>
                                    </ListGroup.Item>
                                </Col>
                            </ListGroup>

                            <ListGroup>
                                <Col className="col-md-auto">
                                    <br/>
                                    <Row>

                                    </Row>

                                    <ListGroup.Item variant="warning"><Row>
                                        &nbsp;
                                        <u><h5>Marca: </h5></u>
                                        <h5>&nbsp;{instEncontrado[0].instrumento}</h5>
                                    </Row></ListGroup.Item>

                                    <ListGroup.Item><Row>
                                        &nbsp;
                                        <u><h5>Marca: </h5></u>
                                        <h5>&nbsp;{instEncontrado[0].marca}</h5>
                                    </Row></ListGroup.Item>

                                    <ListGroup.Item><Row>
                                        &nbsp;
                                        <u><h5> Modelo: </h5></u>
                                        <h5>&nbsp;{instEncontrado[0].modelo}</h5>
                                    </Row></ListGroup.Item>


                                    <ListGroup.Item><Row>
                                        &nbsp;
                                        <u><h5>Precio: </h5></u>
                                        <h5> &nbsp;${instEncontrado[0].precio}</h5>

                                    </Row></ListGroup.Item>

                                    <ListGroup.Item> <Row className="cantidadVendida">
                                        &nbsp;
                                        <u><h5>Vendidos: </h5></u>
                                        <h5>&nbsp;{instEncontrado[0].cantidadVendida}</h5>
                                    </Row></ListGroup.Item>

                                    <ListGroup.Item><Row>
                                        &nbsp;
                                        <u><h5>Costo del Envio: </h5></u>
                                        <h5>&nbsp; ${instEncontrado[0].costoEnvio}</h5>
                                    </Row></ListGroup.Item>
                                    <br/>

                                    <Row>

                                    </Row>
                                </Col>
                            </ListGroup>
                        </Row>

                        <Row>
                            <Col>
                                <br/>
                                <Nav.Link href="/productos">
                                    <Button variant="outline-success">Volver</Button>{' '}
                                </Nav.Link>
                            </Col>
                        </Row>

                    </Container>
                </Card>

            </React.Fragment>

        );
    }
}

export default DetalleProducto;