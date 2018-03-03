import React, { Component } from 'react';
import logo from './logo.svg';
import ContentCard from './CardManager.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
