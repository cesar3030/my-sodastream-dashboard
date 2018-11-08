import React, { Component } from 'react';
import Main from './containers/Main';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavigationBar/>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
