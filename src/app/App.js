import React from 'react';
import './App.css';

import NavBar from '../components/navbar/Navbar.jsx';
import Home from '../components/home/Home.jsx';
import About from '../components/about/About.jsx';
import Work from '../components/work/Work.jsx';
import Contact from '../components/contact/Contact.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
