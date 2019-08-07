import React from "react";
import Cabecera from "./cabecera";
import Lista from "./lista";
import firebase from "./firebase";
import Pie from "./pie";
import { Link } from "react-router-dom";

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      personas: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const personaRef = firebase.database().ref("Personas");
    personaRef.on("value", actualizar => {
      let personas = actualizar.val();
      let newState = [];
      for (let persona in personas) {
        newState.push({
          id: persona,
          nombre: personas[persona].nombre,
          trabajo: personas[persona].trabajo
        });
      }
      this.setState({
        personas: newState
      });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <Cabecera />
        <div className="pancarta-boton">
          <Link to="/agregar" className="btn btn-outline-success">
            Agrega a Alguien!
          </Link>
        </div>

        <div className="lista-personas">
          <div className="lista-firebase">
            <Lista lista={this.state.personas} />
          </div>
        </div>
        <Pie />
      </React.Fragment>
    );
  }
}

export default Principal;
