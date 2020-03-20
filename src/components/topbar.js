import React, { Component } from 'react';
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import '../css/topbar.css';

class Topbar extends Component {
  constructor(props) {
    super();
  }

  pageDown = () => {
    // const scroll = new SmoothScroll({
    //   speed: 600,
    //   easing: 'easeInQuad'
    // });
    // const target = document.getElementById('main-section');
    // scroll.animateScroll(target);
    // window.scrollTo(0, window.innerHeight*0.5+400);
  }

  render() {
    return (
      <div className="top-picture-container">
        <Fade left cascade>
          <div className="intro">
            <div className="intro1">Hi, I'm</div>
            <div className="name"><b>Huang Fu Li-Hsiang</b></div>
            <div className="intro2">Frontend Developer Intern</div>
          </div>
        </Fade>
        <Link to="main-section" smooth={true} duration= {500}>
          <Fade bottom>
            <div className="start-button">
              <span>VIEW</span>
            </div>
          </Fade>
        </Link>
      </div>
    )
  }
}

export default Topbar;
