import React, { Component } from 'react';
import Header from './header/header'
import './assets/main.css';

class App extends Component {
  render() {
    return (
      <div className="App flex flex-col h-screen">
      <Header />
        <div id="container" className="flex-1 overflow-y-auto p-5"></div>
      </div>
    );
  }
}

export default App;
