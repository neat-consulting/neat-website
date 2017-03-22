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
        <Link className="logo" to="/"><img src="images/logo.png" />NEAT Consulting</Link>
        <nav>
          <ul className="top-nav">
            <li className="links"><Link to="/services">Services</Link></li>
            <li className="links"><Link to="/expertise">Expertise</Link></li>
            <li className="links"><Link to="/about">About</Link></li>
            <li className="links"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link className="menu">Menu</Link>
      </header>
    );
  }
}
