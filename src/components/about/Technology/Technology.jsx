import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import './style.css';

function Technology() {
  return (
    <div>

      <Accordion>

        <Card className="tech-border">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="tech-bg tech-title">
            <svg className="bi bi-display" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z" />
              <path fillRule="evenodd" d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
            </svg> Front End
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="tech-bg">
              <i className="fab fa-html5 tech-ico" style={{ color: '#DF4529' }} aria-hidden="true"></i>
              <i className="fab fa-css3-alt tech-ico" style={{ color: '#208BEC' }}></i>
              <i className="fab fa-js tech-ico" style={{ color: '#FAD944' }} aria-hidden="true"></i>
              <i className="fab fa-react tech-ico" style={{ color: '#58D5F8' }} aria-hidden="true"></i>
              <i className="fab fa-bootstrap tech-ico" style={{ color: '#aa00ff' }} aria-hidden="true"></i>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="tech-border">
          <Accordion.Toggle as={Card.Header} eventKey="1" className="tech-bg tech-title">
            <svg className="bi bi-server" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2c0-1.105-2.239-2-5-2S3 .895 3 2s2.239 2 5 2 5-.895 5-2z" />
              <path d="M13 3.75c-.322.24-.698.435-1.093.593C10.857 4.763 9.475 5 8 5s-2.857-.237-3.907-.657A4.881 4.881 0 0 1 3 3.75V6c0 1.105 2.239 2 5 2s5-.895 5-2V3.75z" />
              <path d="M13 7.75c-.322.24-.698.435-1.093.593C10.857 8.763 9.475 9 8 9s-2.857-.237-3.907-.657A4.881 4.881 0 0 1 3 7.75V10c0 1.105 2.239 2 5 2s5-.895 5-2V7.75z" />
              <path d="M13 11.75c-.322.24-.698.435-1.093.593-1.05.42-2.432.657-3.907.657s-2.857-.237-3.907-.657A4.883 4.883 0 0 1 3 11.75V14c0 1.105 2.239 2 5 2s5-.895 5-2v-2.25z" />
            </svg> Back End
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="tech-bg">
              <i className="fab fa-node tech-ico" style={{ color: '#7DB829' }} aria-hidden="true"></i>
              <i className="fab fa-npm tech-ico" style={{ color: '#C90D12' }} aria-hidden="true"></i>
              <i className="fas fa-database tech-ico" style={{ color: '#1e88e5' }} aria-hidden="true"></i>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="tech-border">
          <Accordion.Toggle as={Card.Header} eventKey="3" className="tech-bg tech-title">
            <svg className="bi bi-code-slash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z" />
            </svg>  Other technologies
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="tech-bg">
              <i className="fab fa-git-alt tech-ico" style={{ color: '#EC4833' }} aria-hidden="true"></i>
              <i className="fab fa-github tech-ico" style={{ color: 'white' }} aria-hidden="true"></i>
              <i className="fab fa-java tech-ico" style={{ color: '#F9131C' }} aria-hidden="true"></i>
              <i className="fab fa-linux tech-ico" style={{ color: '#000' }} aria-hidden="true"></i>
              <i className="fab fa-ubuntu tech-ico" style={{ color: '#DE4926' }} aria-hidden="true"></i>
              <i className="fas fa-terminal tech-ico" style={{ color: 'white' }}></i>
            </Card.Body>
          </Accordion.Collapse>
        </Card>



      </Accordion>


    </div>
  );
}

export default Technology;