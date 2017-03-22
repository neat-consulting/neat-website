import React, { Component } from 'react';
import { Nav } from 'containers';
import { Home, Services, Expertise, About, Contact } from 'components';
import './_App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <div className="content">
          <Home />
          <Services />
          <Expertise />
          <About />
          <Contact />
        </div>
        <footer className="footer">
          <div>Seal Beach, CA 90740 | 562-330-0706</div>
          <div>&#9400;Copyright 2017, NEAT Consulting. All rights reserved.</div>
        </footer>
      </div>
    );
  }
}
