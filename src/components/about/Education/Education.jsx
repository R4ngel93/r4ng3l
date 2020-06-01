import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'


import './style.css';

function Education() {
  return (
    <div >
      <ListGroup >

        <ListGroup.Item className="list-item">
          <div className="link-name">
            <i className="fa fa-free-code-camp"></i>
            {' Responsive web design'}
          </div>
          <a href="https://www.freecodecamp.org/certification/r4ng3l/responsive-web-design" target="_blank" rel="noopener noreferrer" className="hidden-link">
            <i className="fa fa-free-code-camp"></i>
            {' Responsive web design'}
          </a>
          <Button variant="outline-primary" href="https://www.freecodecamp.org/certification/r4ng3l/responsive-web-design" target="_blank" rel="noopener noreferrer" size="sm" className="link-btn">
            View
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="list-item">
          <div className="link-name">
            <i className="fa fa-free-code-camp"></i>
            {' JavaScript algorithms and data structures'}
          </div>
          <a href="https://www.freecodecamp.org/certification/r4ng3l/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer" className="hidden-link">
            <i className="fa fa-free-code-camp"></i>
            {' JavaScript algorithms and data structures'}
          </a>
          <Button variant="outline-primary" href="https://www.freecodecamp.org/certification/r4ng3l/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer" size="sm" className="link-btn">
            View
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="list-item">
          <div className="link-name">
            <i className="fa fa-free-code-camp"></i>
            {' Front end libraries'}
          </div>
          <a href="https://www.freecodecamp.org/certification/r4ng3l/front-end-libraries" target="_blank" rel="noopener noreferrer" className="hidden-link">
            <i className="fa fa-free-code-camp"></i>
            {' Front end libraries'}
          </a>
          <Button variant="outline-primary" href="https://www.freecodecamp.org/certification/r4ng3l/front-end-libraries" target="_blank" rel="noopener noreferrer" size="sm" className="link-btn">
            View
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="list-item">
          <div className="link-name">
            <i className="fa fa-free-code-camp"></i>
            {' Data visualization'}
          </div>
          <a href="https://www.freecodecamp.org/certification/r4ng3l/data-visualization" target="_blank" rel="noopener noreferrer" className="hidden-link">
            <i className="fa fa-free-code-camp"></i>
            {' Data visualization'}
          </a>
          <Button variant="outline-primary" href="https://www.freecodecamp.org/certification/r4ng3l/data-visualization" target="_blank" rel="noopener noreferrer" size="sm" className="link-btn">
            View
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="list-item">
          <div className="link-name">
            <i className="fa fa-free-code-camp"></i>
            {' APIs and microservices'}
          </div>
          <a href="https://www.freecodecamp.org/certification/r4ng3l/apis-and-microservices" target="_blank" rel="noopener noreferrer" className="hidden-link">
            <i className="fa fa-free-code-camp"></i>
            {' APIs and microservices'}
          </a>
          <Button variant="outline-primary" href="https://www.freecodecamp.org/certification/r4ng3l/apis-and-microservices" target="_blank" rel="noopener noreferrer" size="sm" className="link-btn">
            View
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="list-item">
          <div className="link-name">
            <i className="fa fa-free-code-camp"></i>
            {' Information security and quality assurance'}
          </div>
          <a href="https://www.freecodecamp.org/certification/r4ng3l/information-security-and-quality-assurance" target="_blank" rel="noopener noreferrer" className="hidden-link">
            <i className="fa fa-free-code-camp"></i>
            {' Information security and quality assurance'}
          </a>
          <Button variant="outline-primary" href="https://www.freecodecamp.org/certification/r4ng3l/information-security-and-quality-assurance" target="_blank" rel="noopener noreferrer" size="sm" className="link-btn">
            View
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="list-item">
          <div className="link-name">
            <i className="fa fa-free-code-camp"></i>
            {' Full Stack'}
          </div>
          <a href="https://www.freecodecamp.org/certification/r4ng3l/full-stack" target="_blank" rel="noopener noreferrer" className="hidden-link">
            <i className="fa fa-free-code-camp"></i>
            {' Full Stack'}
          </a>
          <Button variant="outline-primary" href="https://www.freecodecamp.org/certification/r4ng3l/full-stack" target="_blank" rel="noopener noreferrer" size="sm" className="link-btn">
            View
          </Button>
        </ListGroup.Item>

      </ListGroup>
    </div>
  );
}

export default Education;