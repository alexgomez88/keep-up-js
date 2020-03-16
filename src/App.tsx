import React from "react";
import { Router, 
  RouteComponentProps, 
  createMemorySource, 
  createHistory, 
  LocationProvider } from "@reach/router";
import Welcome from './screen/welcome'

let source = createMemorySource("/");
let history = createHistory(source);

const App = () => (
  <LocationProvider history={history}>
    <Router>
      <Welcome path="/" />
    </Router>
  </LocationProvider>
);

export default App;
