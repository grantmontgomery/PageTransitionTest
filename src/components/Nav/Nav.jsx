import React, { Component } from "react";
import { Counter } from "../Counter";
import Logo from "../../Images/Logo";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  state = {};
  navStyle = () => {
    return { color: "white" };
  };

  render() {
    return (
      <div>
        <nav>
          <Link style={this.navStyle()} to="/">
            <div className="logo-wrapper">
              <img className="logo" src={Logo} alt="" />
            </div>
          </Link>

          <ul className="nav-links">
            <Link style={this.navStyle()} to="/about">
              <li>About</li>
            </Link>
            <Link style={this.navStyle()} to="/scheduler">
              <li>Scheduler</li>
            </Link>
          </ul>
          <Counter></Counter>
        </nav>
      </div>
    );
  }
}

export default Nav;
