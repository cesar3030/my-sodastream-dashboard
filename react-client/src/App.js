import React, { Component } from 'react';
import Main from './components/Main';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar/>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
