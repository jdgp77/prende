import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'typeface-roboto';
import 'typeface-poppins';
import Router from './components/Router';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router></Router>
      </div>
    );
  }
}

export default App;
