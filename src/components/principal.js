import React from "react";
import Cabecera from "./cabecera";
import Lista from "./lista";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class Principal extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      personas: [
        // {
        //   nombre: "[Un nombre]",
        //   trabajo: "[Un trabajo]"
        // }
      ]
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

  // componentDidMount() {
  //
  //   this.getUserData();
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.writeUserData();
  //   }
  // }
  //
  // componentWillUnmount() {
  //
  // }
  //
  // writeUserData = () => {
  //   firebase
  //     .database()
  //     .ref("Personas")
  //     .set(this.state);
  //   console.log("Información Guardada!");
  // };
  //
  // getUserData = () => {
  //   let ref = firebase.database().ref("Personas");
  //   ref.on("value", snapshot => {
  //     const state = snapshot.val();
  //     this.setState(state);
  //   });
  // };

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
