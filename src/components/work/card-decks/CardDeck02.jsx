import React from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

function CardDeck02() {
  return (
    <div>
      <CardDeck className="mt-4">

        {/* Choropleth map */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Education Choropleth Map</Card.Header>
          <Card.Body className="card-body">
            <i className="fas fa-shapes card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://r4ngel93.github.io/d3-choropleth-map/" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Tree map */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Videogame Tree Map</Card.Header>
          <Card.Body className="card-body">
            <i className="fas fa-gamepad card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://r4ngel93.github.io/d3-tree-map/index.html" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Heat map */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Heat Map</Card.Header>
          <Card.Body className="card-body">
            <i className="fas fa-fire-alt card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://codepen.io/R4ngel93/full/bGdBxzP" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>

        {/* Scatterplot map */}
        <Card className="text-center border-0">
          <Card.Header className="card-header ">Scatterplot Map</Card.Header>
          <Card.Body className="card-body">
            <i className="fas fa-drafting-compass card-icon"></i>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="card-btn" size="sm" href="https://codepen.io/R4ngel93/full/vYOGBWg" target="_blank">
              <i className="fas fa-external-link-alt btn-ico"></i>
            </Button>
          </Card.Footer>
        </Card>


      </CardDeck>
    </div>
  );
}

export default CardDeck02;