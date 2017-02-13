import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="www.neat-consulting.com">
          <img src="images/icon.png" />
        </a>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
