import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Contacts</p>
        <Contact/>
      </div>
    );
  }
}

export default App;
