import React, { Component } from 'react';

import './App.css';
import Nav from './Nav';
import MainArea from './MainArea';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Search className="searchbar"/>
        <br/>
        <br/>
        <MainArea/>
      </div>
    );
  }
}

export default App;
