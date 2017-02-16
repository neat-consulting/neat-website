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
          <li className="logo"><Link to="/">NEAT Consulting</Link></li>
          <div>
            <div className={this.state.menuToggled ? "right-links" : "hidden"}>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/expertise">Expertise</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </div>
            <li className="menu"><a onClick={() => this.toggleMenu()}>&#9776;</a></li>
          </div>
        </ul>
      </nav>
    );
  }
}
