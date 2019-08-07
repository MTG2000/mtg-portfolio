import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route path="/about" />
    <Route path="/login" />
    <Route path="/contact" />
    <Route path="/projects" />
    <Route path="/" />
  </Switch>
);
