import React, { Component } from "react";
import "./HomePage.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav>
          <ul className="nav-link">
            <li>About</li>
            <li>Scheduler</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HomePage;
