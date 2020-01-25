import React, { Component } from "react";
import { Route, Switch } from "react-router";

// import Wrapper from "./components/wrapper/view";
import Main from "./pages/main/container";
// import Search from "./pages/search/container";
// import History from "./pages/history/container";
// import Providers from "./pages/providers/container";
// import Settings from "./pages/settings_page/container";

export default class MenuView extends Component {
  render() {
    console.log(this.props);

    return (
      <Switch>
        <Route exact path="/" component={Main} />
        {/* {window.location.path !== "/auth" && 
          <Wrapper history={this.props.history}>
            <Route path="/search" component={Search} />
            <Route path="/history" component={History} />
            <Route path="/providers" component={Providers} />
            <Route path="/settings" component={Settings} />
          </Wrapper> */}
        }
      </Switch>
    )
  };
}
