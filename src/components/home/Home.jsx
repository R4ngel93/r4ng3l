import React from 'react';

import './style.css';

function Home() {
  return (
    <div id="home-container">
      <div id="home" >

        <svg id="me" className="bi bi-person-fill about-bg" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
          <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg >
        <h1 id="home-name">Hey, Im R4ng3l</h1>
        <h4 id="home-intro">a web delevoper</h4>

      </div >
    </div >
  );
}

export default Home;