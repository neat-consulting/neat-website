import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      altHeader: false,
      menuToggled: true
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const vh = window.innerHeight;
      const scroll = window.scrollY + 82;
      if (scroll > vh) {
        this.setState({
          altHeader: true
        });
      } else {
        this.setState({
          altHeader: false
        });
      }
    });
  }

  toggleMenu() {
    this.setState({
      menuToggled: this.state.menuToggled ? false : true
    });
  }

  render() {
    return (
      <header className={this.state.altHeader ? "header-alt" : "header"}>
        <div className="headwrapper">
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
        </div>
      </header>
    );
  }
}
