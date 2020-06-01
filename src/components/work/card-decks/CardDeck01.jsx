import React from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

function CardDeck01() {
  return (
    <div>
      <CardDeck className="mt-4">

        {/* Calculator */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">React Calculator</Card.Header>
          <Card.Body className="card-body ">
            <i className="fas fa-calculator card-icon"></i>
          </Card.Body>
          <Card.Footer className="card-footer">
            <Button variant="primary" className="card-btn" size="sm" href="https://r4ngel93.github.io/react-calculator/" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Drum machine */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">React Drum Machine</Card.Header>
          <Card.Body className="card-body">
            <i className="fas fa-drum card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://r4ngel93.github.io/react-drum-machine/" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Pomodoro clock */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Pomodoro Timer</Card.Header>
          <Card.Body className="card-body">
            <i className="far fa-clock card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://r4ngel93.github.io/pomodoro-clock/" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Rock, Paper & Scissors */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">{'Rock, Paper & Scissors'}</Card.Header>
          <Card.Body className="card-body">
            <i className="fas fa-hand-scissors card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://r4ngel93.github.io/rock-paper-scissors/" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>


      </CardDeck>
    </div>
  );
}

export default CardDeck01;