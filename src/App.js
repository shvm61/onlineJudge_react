import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { login, home, compile } from "./components";
import axios from "axios";

axios.defaults.baseURL = "https://onlinejudgebackend.kal61.repl.co/api";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/compile" component={compile} />
              {/* <AuthRoute exact path="/login" component={login} /> */}
              {/* <AuthRoute exact path="/signup" component={signup} /> */}
              {/* <Route exact path="/users/:handle" component={user} /> */}
              {/* <Route
                exact
                path="/users/:handle/scream/:screamId"
                component={user}
              /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
