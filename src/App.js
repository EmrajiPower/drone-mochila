import React from "react";
import Formulario from "./formulario";
import Cabecera from "./cabecera";
import Resultado from "./resultado";

class App extends React.Component {
  state = {
    form: {
      nombre: "",
      apellido: "",
      correo: "",
      trabajo: ""
    }
  };

  //Levantando el estado de Formulario a a Resultados
  handleChange = e => {
    //Guardar estado
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <Cabecera nombre={this.state.form.nombre} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4">
              <Resultado
                nombre={this.state.form.nombre}
                trabajo={this.state.form.trabajo}
              />
            </div>
            <div className="col-4">
              <Formulario
                onChange={this.handleChange}
                formvalues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
