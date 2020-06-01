import React from 'react';

import Button from 'react-bootstrap/Button'

import './style.css';

function Contact() {

  return (
    <div id="contact">
      <div id="contact-container" className="container mx-3">
        <h2 id="contact-title">Let's work together...</h2>
        <h5 id="contact-subtitle">How do you take your coffee?</h5>

        <h6 id="contact-email" className="mt-5" >
          <i className="far fa-envelope"></i> rangel.oscar93@gmail.com
        </h6>

        <div id="contact-buttons">
          <Button variant="primary" className="btn-circle" href="https://www.linkedin.com/in/oscar-rangel-9a09ba1a8/" target="_blank">
            <i className="fab fa-linkedin-in contact-icon"></i>
          </Button>{' '}
          <Button variant="dark" className="btn-circle" href="https://github.com/R4ngel93" target="_blank">
            <i className="fab fa-github contact-icon"></i>
          </Button>{' '}
          <Button variant="info" className="btn-circle" href="https://twitter.com/OscarRa65705186" target="_blank">
            <i className="fab fa-twitter contact-icon"></i>
          </Button>{' '}
          <Button variant="success" className="btn-circle" href="https://www.freecodecamp.org/r4ng3l" target="_blank">
            <i className="fab fa-free-code-camp contact-icon"></i>
          </Button>{' '}
        </div>

      </div>
    </div>
  );
}

export default Contact;