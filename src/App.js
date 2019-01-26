import React, { Component } from 'react';
import './App.css';
import WindowContainer from './Components/WindowContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Jackie's Portfolio</p>
        <WindowContainer/>
      </div>
    );
  }
}

export default App;
