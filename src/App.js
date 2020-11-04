import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { login, home } from "./components";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
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
