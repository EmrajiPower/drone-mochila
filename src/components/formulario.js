import React from "react";
import firebase from "./firebase";

class Formulario extends React.Component {
  // handleChange = e => {
  //   // name: e.target.name;
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const itemsRef = firebase.database().ref("Personas");
    const item = {
      nombre: this.props.formvalues.nombre,
      apellido: this.props.formvalues.apellido,
      correo: this.props.formvalues.correo,
      trabajo: this.props.formvalues.trabajo
    };
    itemsRef.push(item);
    this.setState({
      nombre: "",
      apellido: "",
      correo: "",
      trabajo: ""
    });
    alert("Información guardada!");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="nombre"
              // Para tener un estado controlado este prop, una sola fuente de Información
              values={this.props.formvalues.nombre}
              required
            />
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="apellido"
              // Para tener un estado controlado este prop, una sola fuente de Información
              values={this.props.formvalues.apellido}
              required
            />
            <label>Correo</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="correo"
              // Para tener un estado controlado este prop, una sola fuente de Información
              values={this.props.formvalues.correo}
              required
            />
            <label>Trabajo</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="trabajo"
              // Para tener un estado controlado este prop, una sola fuente de Información
              values={this.props.formvalues.trabajo}
              required
            />
            <button
              onChange={this.handleChange}
              className="btn btn-outline-success"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Formulario;
