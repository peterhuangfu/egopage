import React, { Component } from 'react';
import '../css/section.css';

class Section extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <section className="main-intro">
        <div className="avatar-container">
          <img src="/imgs/avatar2.jpg" alt="Avatar"/>
        </div>
        <div className="self-intro">
          {/* <div className="pre-text"></div> */}
          <span className="about-me">About Me</span><br />
          <span className="about-text">Hi, My name is Hunag Fu Li-Hsiang.</span>
        </div>
      </section>
    )
  }
}

export default Section;
