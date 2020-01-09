import React, { Component } from "react";
import { Nav, Scheduler, About } from "./components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Nav></Nav>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="slide"
                >
                  <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/scheduler" component={Scheduler}></Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
