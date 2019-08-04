import React from "react";
import logo from "../imagenes/drone.svg";

class Cabecera extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="container" id="cabecera">
            <div className="row">
              <div className="col-6">
                <h2>Drone Mochila</h2>
              </div>
              <div className="col-4">
                <p>Bienvenido {this.props.nombre} al foro!</p>
              </div>
            </div>
          </div>
          <div className="pancarta">
            <div className="pancarta-encabezado">
              <div className="pancarta-container">
                <img className="pancarta-img" src={logo} alt="logo" />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Cabecera;
