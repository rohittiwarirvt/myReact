import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-7 offset-sm-2">
              <p>Contacts</p>
              <Contacts/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
