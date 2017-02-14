import React, { Component } from 'react';
import './_Home.scss';

export default function Home() {
  return (
    <div className="page-view">

      <article>
        <h1>NEAT Consulting</h1>
        <p>We are a global technology company specializing in Noise Engineering & Acoustic Technology. Our technical expertise is in the area of aircraft noise, including low noise design, noise source modeling, noise prediction, acoustic testing technologies, and noise reduction and mitigation, for both aircraft engines and airframes. We provide engineering services to industrial companies, research institutions and academic establishments in applications for commercial aircraft.</p>
      </article>

      <article>
        <h2>Business</h2>
        <ul>
          <li>Specialty software development</li>
          <li>Project planning and execution</li>
          <li>Technical service and consulting</li>
          <li>Technical training</li>
        </ul>
      </article>

      <article>
        <h2>Expertise</h2>
        <ul>
          <li>Noise prediction and simulation</li>
          <li>Low noise design</li>
          <li>Noise reduction and mitigation</li>
          <li>Acoustic testing</li>
        </ul>
      </article>
      
    </div>
  );
}
