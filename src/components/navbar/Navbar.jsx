import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './style.css'


function NavBar() {

  return (
    <div>

      <Navbar id="navbar" collapseOnSelect expand="lg" variant="dark" fixed="top">

        {/* Brand */}
        <Navbar.Brand href="#" id="nav-brand">
          <svg id='icon' className="bi bi-box svg-nav" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
          </svg> <div id="text-brand" className="align-middle d-inline">R4ng3l</div>
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >
          <svg className="bi bi-list svg-nav" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </Navbar.Toggle>

        {/* Menu */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

          <Nav>
            <Nav.Link className="nav-links" href="#about">
              <span className="span-nav">{'<'}</span> About <span className="span-nav">{'/>'}</span>
            </Nav.Link>
            <Nav.Link className="nav-links" href="#work">
              <span className="span-nav">{'<'}</span> Portfolio <span className="span-nav">{'/>'}</span >
            </Nav.Link>
            <Nav.Link className="nav-links" href="#contact">
              <span className="span-nav">{'<'}</span> Contact <span className="span-nav">{'/>'}</span>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>

    </div>
  );
}

export default NavBar;

