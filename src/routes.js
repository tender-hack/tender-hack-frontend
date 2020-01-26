import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Main from "./pages/main/container";

export default class MenuView extends Component {
  render() {
    console.log(this.props);

    return (
      <Switch>
        <Route path="/" component={Main}/>
      </Switch>
    )
  };
}
