import React, { Component } from 'react';
import Topbar from './topbar';
import Section from './section';
import Footer from './footer';
import '../css/intro.css';

class Intro extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Topbar />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default Intro;
