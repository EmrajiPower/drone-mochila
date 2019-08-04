import React from "react";
import Cabecera from "./cabecera";
import Lista from "./lista";
import { Link } from "react-router-dom";

class Principal extends React.Component {
  state = {
    personas: [
      {
        nombre: "María Camila",
        trabajo: "Contadora",
        correo: "mariavoladora@gmail.com"
      },
      {
        nombre: "Denys Paola",
        trabajo: "Ingeniera Civil",
        correo: "paobella@hotmail.com"
      },
      {
        nombre: "Zu Yung",
        trabajo: "Arquitecto",
        correo: "animales@gmail.com"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Cabecera />
        <div className="pancarta-container">
          <div className="pancarta-boton">
            <Link to="/agregar" className="btn btn-outline-success">
              Agregar
            </Link>
          </div>
        </div>

        <div className="lista-personas">
          <div className="pancarta-container">
            <Lista lista={this.state.personas} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Principal;
