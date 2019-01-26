import React, { Component } from 'react';
import './App.css';
import AboutContainer from './Components/AboutContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Jackie's Portfolio</p>
        <AboutContainer/>

      </div>
    );
  }
}

export default App;
