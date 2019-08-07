import React from "react";

class Resultado extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="panel-A">
          <h3>Mis datos 📋</h3>
          <p> 👤 {this.props.nombre}</p>
          <p> 🔖 {this.props.trabajo}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Resultado;
