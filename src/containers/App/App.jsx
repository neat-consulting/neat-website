import React, { Component } from 'react';
import { Nav } from 'containers';
import './_App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>NEAT Consulting</h1>
          <Nav />
        </header>
        <img className="banner" src="assets/soundwave.png" />
        <div className="content">
          {this.props.children}
        </div>
        <footer className="footer">
          <div>Seal Beach, CA 90740 | 562-330-0706</div>
          <div>&#9400;Copyright 2017, NEAT Consulting. All rights reserved.</div>
        </footer>
      </div>
    );
  }
}
