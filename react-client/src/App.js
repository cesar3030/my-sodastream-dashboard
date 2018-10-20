import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        </header>
        <div className="container">
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
