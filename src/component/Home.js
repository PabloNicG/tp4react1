import React, {Component} from 'react';
import Navigate from "./Navigate"
import {Alert, Container} from "react-bootstrap";


class Home extends Component {
    render() {
        return (

            <React.Fragment>
                <Navigate></Navigate>
                <Container>
                    <br/>
                    <hr/>

                    <Alert variant="secondary">

                        <h1 class="titulo row justify-content-center">Musica Hendrix</h1>
                    </Alert>
                    <br/>
                    <div class="text-alaign:justify"> Musical Hendrix es una tienda de instrumentos musicales con ya más
                        de 15
                        años de experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las
                        mejores elecciones para tu compra musical.
                    </div>
                    <hr/>

                </Container>
            </React.Fragment>
        );
    }
}

export default Home;