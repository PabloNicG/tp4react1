import React, {Component} from 'react';
import Home from "./component/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import DondeEstamos from "./component/DondeEstamos";
import Productos from "./component/Productos";
import DetalleProducto from "./component/DetalleProducto";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/dondeEstamos" component={DondeEstamos}/>
                    <Route exact path="/productos" component={Productos}></Route>
                    <Route exact path="/detalleProducto/:id" component={DetalleProducto}></Route>
                    <Route exact path="/*" component={Home}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
