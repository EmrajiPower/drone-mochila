import React from "react";
import logo from "../imagenes/drone.svg";
import fondoA from "../imagenes/nube.svg";
import fondoB from "../imagenes/nube2.svg";
import fondoC from "../imagenes/nube3.svg";

class Cabecera extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="container" id="cabecera">
            <div className="row">
              <div className="col-6">
                <h1>Drone Mochila</h1>
              </div>
            </div>
          </div>
          <div className="pancarta">
            <div className="pancarta-encabezado">
              <div className="pancarta-fondo">
                <img className="pancarta-fondoA" src={fondoA} alt="fondo" />
                <img className="pancarta-fondoB" src={fondoB} alt="fondo" />
                <img className="pancarta-fondoC" src={fondoC} alt="fondo" />
                <div className="pancarta-container">
                  <img className="pancarta-img" src={logo} alt="logo" />
                </div>
              </div>
              <div className="subtitulo">
                <div className="col-4">
                  <h3>
                    Bienvenido <strong>{this.props.nombre}</strong> al foro!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Cabecera;
