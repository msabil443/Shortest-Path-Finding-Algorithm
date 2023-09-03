// Routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dijkstra from "./pathfindingvisualizer/pathfindingvisualizer";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/home" component={Dijkstra} /> */}
      {/* <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} /> */}
    </Switch>
  );
};

export default Routes;
