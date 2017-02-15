import React, { Component } from 'react';
import { Nav } from 'containers';
import { Footer } from 'components';
import './_App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
