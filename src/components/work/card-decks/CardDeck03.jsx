import React from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

function CardDeck03() {
  return (
    <div>
      <CardDeck className="mt-4">

        {/* Random quote machine */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Random Quote Machine</Card.Header>
          <Card.Body className="card-body">
            <i className="fas fa-quote-right card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://r4ngel93.github.io/random-quote-machine/index.html" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Survey form */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Survey Form</Card.Header>
          <Card.Body className="card-body">
            <i className="far fa-check-square card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://r4ngel93.github.io/survey-form/index#" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Chat Room */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Chat Room</Card.Header>
          <Card.Body className="card-body">
            <i className="far fa-comments card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://socket-app-v3.herokuapp.com/" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Notes app */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Notes App</Card.Header>
          <Card.Body className="card-body">
            <i className="far fa-sticky-note card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://mern-notes-app-v1.herokuapp.com/" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>


      </CardDeck>
    </div>
  );
}

export default CardDeck03;