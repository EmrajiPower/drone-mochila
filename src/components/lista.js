import React from "react";

class Lista extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled">
          {this.props.lista.map(p => {
            return (
              <li key={p.id}>
                {p.nombre}
                <br />
                {p.trabajo}
              </li>
            );
            <br />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Lista;
