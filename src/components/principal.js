import React from "react";
import Cabecera from "./cabecera";
import Lista from "./lista";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [
        {
          nombre: "[Un nombre]",
          trabajo: "[Un trabajo]"
        }
      ]
    };
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
