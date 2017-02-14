import React, { Component } from 'react';
import './_Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <article className="summary">
          <h1>NEAT Consulting</h1>
          <p>We are a global technology company specialized in Noise Engineering & Acoustic Technology</p>
          <p>Our technical expertise is in the area of aircraft noise, including low noise design, noise source modeling, noise prediction, acoustic testing technologies, and noise reduction and mitigation, for both aircraft engines and airframes.</p>
          <p>We provide engineering services to industrial companies, research institutions and academic establishments in applications for commercial aircraft.</p>
        </article>

        <div className="summary-container">
          <article className="summary">
            <h2>Business</h2>
            <ul>
              <li>Specialty software development</li>
              <li>Project planning and execution</li>
              <li>Technical service and consulting</li>
              <li>Technical training</li>
            </ul>
          </article>
          <article className="summary">
            <h2>Expertise</h2>
            <ul>
              <li>Noise prediction and simulation</li>
              <li>Low noise design</li>
              <li>Noise reduction and mitigation</li>
              <li>Acoustic testing</li>
            </ul>
          </article>
        </div>
      </div>
    );
  }
}
