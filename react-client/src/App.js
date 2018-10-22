import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar/>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
