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
              <li><a href="sass.html">Refills</a></li>
              <li><a href="badges.html">Reloads</a></li>
            </ul>
          </div>
        </nav>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
