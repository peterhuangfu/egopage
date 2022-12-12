import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Exps from '../exps';
import Projects from '../projects';
import '../css/section.css';

class Section extends Component {
  constructor(props) {
    super();
  }

  render() {
    const exps = Exps;
    const projects = Projects;

    return (
      <section className="main-intro" id="main-section">
        <div className="intro-container">
          <Fade bottom>
            <img className="avatar" src="/imgs/IMG_0001.jpg" alt="Avatar" />
            <div className="self-intro">
              <span className="about-me">Education</span>
              <span className="about-text medium">National Tawian University</span>
              <span className="about-text small"><i>Master of Information Management</i></span>
              <span className="about-text small date"><i>Sept 2020 - Aug 2022</i></span>

              <div style={{ width: '100%' }}></div>

              <span className="about-text medium">National Tawian University</span>
              <span className="about-text small"><i>Bachelor of Information Management</i></span>
              <span className="about-text small date"><i>Sept 2016 - June 2020</i></span>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="exp-title">
            <span >Work Experience</span>
          </div>
        </Fade>
        <div className="exp-container">
          {exps.map((e, i) => 
            <Fade bottom key={i}>
              <div className="each-exp-container">
                <img src={e.image} alt="pic" />
                <div className="each-exp-content">
                  <span className="each-exp-title"><b>{e.title}</b></span>
                  <span className="each-exp-position"><b>{e.position}</b></span>
                  <span className="each-exp-location"><b>{e.location}</b></span>
                  {/* {e.description.map((d, ind) =>
                    <span key={ind} className="each-exp-description">-- {d}</span>
                  )} */}
                  <ul className="each-exp-description-container">
                    {e.description.map((d, ind) =>
                      <li key={ind} className="each-exp-description">{d}</li>
                    )}
                  </ul>
                </div>
              </div>
            </Fade>
          )}
        </div>

        <Fade bottom>
          <div className="exp-title">
            <span >Projects</span>
          </div>
        </Fade>
        <div className="exp-container">
          {projects.map((e, i) => 
            <Fade bottom key={i}>
              <div className="each-exp-container">
                <img src={e.image} alt="pic" />
                <div className="each-exp-content">
                  <span className="each-exp-title"><b>{e.title}</b></span>
                  <span className="each-exp-position"><b>{e.position}</b></span>
                  <span className="each-exp-location"><b>{e.location}</b></span>
                  {/* {e.description.map((d, ind) =>
                    <span key={ind} className="each-exp-description">-- {d}</span>
                  )} */}
                  <ul className="each-exp-description-container">
                    {e.description.map((d, ind) =>
                      <li key={ind} className="each-exp-description">{d}</li>
                    )}
                  </ul>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </section>
    )
  }
}

export default Section;
