import React from "react";
import Agregar from "./components/agregar";
import Principal from "./components/principal";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/agregar" component={Agregar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
