import React from "react";

class Resultado extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Mi info 📋</h3>
        <p>{this.props.nombre}</p>
        <p>{this.props.trabajo}</p>
      </React.Fragment>
    );
  }
}

export default Resultado;
