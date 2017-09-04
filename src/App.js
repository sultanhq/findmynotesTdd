import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNote from './components/addNote/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Find my Notes</h2>
        </div>
        <div className="Add-Note">
          <AddNote submitNote={() =>{}} />
        </div>
      </div>
    );
  }
}

export default App;
