import React, { Component } from 'react';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="www.neat-consulting.com">
          <img className="logo" src="images/icon.png" />
        </a>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Expertise</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
