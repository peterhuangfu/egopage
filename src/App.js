import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Intro from './components/intro';

class App extends Component{
  constructor(props) {
    super();
    const url = window.location.origin;

    if (!url.includes('localhost') && !url.includes('https')) {
      window.location = `https:${url.split(':')[1]}`;
    }
  }

  render() {
    return (
      <Router>
        <Intro />
      </Router>
    );
  }
}

export default App;
