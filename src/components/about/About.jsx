import React from 'react';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import Education from './Education/Education.jsx';
import Tech from './Technology/Technology.jsx';
import Skills from './Skills/Skills.jsx';


import './style.css';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <button className="btn btn-block btn-outline-primary" type="button" onClick={decoratedOnClick} >
      {children}
    </button>
  );
}

function About() {
  return (
    <div id="about">
      <div id="about-container">
        <h4 id="about-title">About the developer</h4>

        <div id="about-content">
          <Accordion>

            <Card className="card-bg">
              <Card.Header>
                <CustomToggle eventKey="0">{'Education & Certifications'}</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Education />
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="card-bg">
              <Card.Header>
                <CustomToggle eventKey="1">{'Technologies'}</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Tech />
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="card-bg">
              <Card.Header>
                <CustomToggle eventKey="2">{'Skills'}</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Skills />
                </Card.Body>
              </Accordion.Collapse>
            </Card>

          </Accordion>
        </div>

      </div>
    </div>
  );
}

export default About;