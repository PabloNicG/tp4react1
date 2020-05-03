import React, {Component} from 'react';

class Envio extends Component {
    render() {
        //Realizo el if para el envio gratis

        if (this.props.costoEnvio === "G") {
            return (
                <div className="envioGratis">Envios Gratis a todo el País

                    <img src={require(`../assets/images/camion.png`)}></img>

                </div>
            );
        } else {
            return (
                <div className="envio">
                Costo de envio al Interior del País: ${this.props.costoEnvio}


                </div>
            );
        }
        //Si el producto en JSON contiene en costo de envio una G entonces el envio es gratis.
    }
}

export default Envio;