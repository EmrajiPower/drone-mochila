import React from "react";
import Agregar from "./components/agregar";
import Principal from "./components/principal";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/principal" component={Principal} />
        <Route exact path="/principal/agregar" component={Agregar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
