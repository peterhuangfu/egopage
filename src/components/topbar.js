import React, { Component } from 'react';
import '../css/topbar.css';

class Topbar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="top-picture-container">
        <div className="intro">
          <div className="intro1">Hey, I'm</div>
          <div className="name"><b>Huang Fu Li-Hsiang</b></div>
          <div className="intro2">Full Stack Developer Intern</div>
        </div>
        <div className="start-button">
          <span>VIEW</span>
        </div>
      </div>
    )
  }
}

export default Topbar;
