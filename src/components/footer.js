import React, { Component } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import '../css/footer.css';

class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <footer>
        <div className="contact-info-container">
          <div className="contact-info" style={{ width: '270px' }}>
            <EmailIcon />
            <span>nightlight870213@gmail.com</span>
          </div>
          <div className="contact-info" style={{ width: '150px' }}>
            <GitHubIcon />
            <span>peterhuangfu</span>
          </div>
          <div className="contact-info">
            <LocalPhoneIcon />
            <span>(+886)908871302</span>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright@ Huang Fu Li Hsiang</span>
        </div>
      </footer>
    )
  }
}

export default Footer;
