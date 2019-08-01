import React from "react";

class Formulario extends React.Component {
  // handleChange = e => {
  //   // name: e.target.name;
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form id="formatear-formulario" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="nombre"
              // Para tener un estado controlado este prop, una sola fuente de Información
              values={this.props.formvalues.nombre}
            />
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="apellido"
              // Para tener un estado controlado este prop, una sola fuente de Información
              values={this.props.formvalues.apellido}
            />
            <label>Correo</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="correo"
              // Para tener un estado controlado este prop, una sola fuente de Información
              values={this.props.formvalues.correo}
            />
            <label>Trabajo</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="trabajo"
              // Para tener un estado controlado este prop, una sola fuente de Información
              values={this.props.formvalues.trabajo}
            />
            <button className="btn btn-outline-success">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Formulario;
