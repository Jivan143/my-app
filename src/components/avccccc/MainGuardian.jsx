import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GuarianNavBar from "./GuarianNavBar";
import Guardians from "./Guardian";

class MainGuardian extends Component {
  render() {
    return (
    <div className="container">
      <Switch>
      <Route path="/Guardian/:section1" component={Guardians} />
      <Route path="/Guardian" component={Guardians} />


        <Redirect from="/" to="/Guardian" />
      </Switch>
    </div>
    );
  }
}

export default MainGuardian;
