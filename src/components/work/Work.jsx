import React from 'react';

import CardDeck01 from './card-decks/CardDeck01.jsx';
import CardDeck02 from './card-decks/CardDeck02.jsx';
import CardDeck03 from './card-decks/CardDeck03.jsx';

import './style.css';

function Work() {
  return (
    <div id="work" className="mb-5">
      <div id="work-container">
        <h4 id="work-title">Some of my work</h4>
        <div id="work-content" className="mt-1">

          <CardDeck01 />
          <CardDeck02 />
          <CardDeck03 />

        </div>
      </div>
    </div>
  );
}

export default Work;