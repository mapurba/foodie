import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import Routing from './route/route';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routing />
      </div>
    );
  }
}

export default App;
