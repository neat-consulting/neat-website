import React, { Component } from 'react';
import { Link } from 'react-router';
import './_Nav.scss';

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      menuToggled: true
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuToggled: this.state.menuToggled ? false : true
    })
  }

  render() {
    return (
      <header className="header">
        <a className="logo" href="#top"><img src="images/logo.png" />NEAT Consulting</a>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a className="menu">Menu</a>
      </header>
    );
  }
}
