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
      <nav>
        <ul className="top-nav">
          <li className="logo"><Link to="/"><img src="assets/logo.png" />NEAT Consulting</Link></li>
          {/*<li className="menu"><a onClick={() => console.log('clicked')}>&#9776;</a></li>*/}
          <li className="links"><Link to="/services">Services</Link></li>
          <li className="links"><Link to="/expertise">Expertise</Link></li>
          <li className="links"><Link to="/about">About</Link></li>
          <li className="links"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}
