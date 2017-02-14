import React, { Component } from 'react';
import { Link } from 'react-router';
import { NavLink } from 'components';
import './_Nav.scss';

export default class Nav extends Component {
  render() {
    const linkNames = ['menu', 'home', 'services', 'expertise', 'about', 'contact'];
    const navLinks = linkNames.map(name => {
      return (
        <NavLink
          key={name}
          route={name}/>
      );
    });
    return (
      <nav>
        <ul className="top-nav">
          {navLinks}
        </ul>
      </nav>
    );
  }
}
