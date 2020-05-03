import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Badge, CardDeck} from "react-bootstrap";

class Tarjeta extends Component {
    render() {

        if (this.props.costoEnvio !== "G") {
            //Este if me permite diferencia los que tienen envio gratis

            return (
                <React.Fragment>
                    <div>
                        <CardDeck>

                            <Card className="margenesTarjeta" border="light" style={{width: '18rem'}}>

                                <div className="margenesTarjeta  card border-secondary">
                                    <Card.Body className="body ">
                                        <Card.Img variant="top" className="maxAltoImg"
                                                  src={require(`../assets/images/${this.props.imagen}`)}
                                                  alt="Imagen del Producto"
                                                  align="center"/>

                                        <br/>
                                        <h5>
                                            <hr/>
                                            {this.props.instrumento}</h5>

                                        <h6>
                                            <hr/>
                                            {this.props.marca}</h6>
                                        <hr/>

                                        <Card.Text><Badge variant="success">Precio: </Badge> ${this.props.precio}
                                        </Card.Text>

                                        <Card.Text className="envioGratis">
                                            <img src={require(`../assets/images/camion.png`)}></img>
                                            Costo del Envio:
                                            ${this.props.costoEnvio}

                                        </Card.Text>

                                        <Card.Text>Cantidad de productos
                                            vendidos: {this.props.cantidadVendida}  </Card.Text>
                                        <Button href={`detalleProducto/${this.props.id}`}
                                                variant="outline-success">Detalle</Button>

                                    </Card.Body>
                                </div>
                            </Card>
                        </CardDeck>
                    </div>
                </React.Fragment>

            );
        } else {
            return (
                <React.Fragment>
                    <div>
                        <CardDeck>
                            <Card className="margenesTarjeta" border="light" style={{width: '18rem'}}>
                                <div className="margenesTarjeta  card border-secondary">
                                    <Card.Body className="body">
                                        <Card.Img variant="top" className="maxAltoImg"
                                                  src={require(`../assets/images/${this.props.imagen}`)}
                                                  alt="Imagen del Producto"
                                                  align="center"/>

                                        <br/>
                                        <h5>
                                            <hr/>
                                            {this.props.instrumento}</h5>

                                        <h6>
                                            <hr/>
                                            {this.props.marca}</h6>


                                        <hr/>
                                        <Card.Text> <Badge variant="success">Precio: </Badge> ${this.props.precio}
                                        </Card.Text>

                                        <Card.Text className="envio"> <img
                                            src={require(`../assets/images/camion.png`)}></img>
                                            Costo del Envio:
                                            ${this.props.costoEnvio}</Card.Text>
                                        <Card.Text>Cantidad de productos
                                            vendidos: {this.props.cantidadVendida}  </Card.Text>
                                        <Button href={`detalleProducto/${this.props.id}`}
                                                variant="outline-success">Detalle</Button>

                                    </Card.Body>
                                </div>
                            </Card>
                        </CardDeck>
                    </div>
                </React.Fragment>
            );
        }

    }
}

export default Tarjeta;


{/* <Card.Img variant="top" className="maxAltoImg"
                                  src={require(`../assets/images/${this.props.imagen.toLowerCase()}`)}/>
                        //Para la imagen se debe poner la ruta absoluta

                        ///
                          <a href={`detalleInstrumentos/${this.props.id}`}>
                                <img variant="top"  className="imagen" src={require(`../assets/images/${this.props.imagen}`)}
                                     alt="Imagen del Producto"
                                     align="left"
                                />
                            </a>
                        */
}