import React, { Component } from 'react';
import './_Expertise.scss';

export default function Expertise() {
  return (
    <div className="page-view">

      <div>
        <h1>Technical Expertise</h1>
        <p>NEAT Consulting's main technical expertise is aircraft noise and acoustic technologies. This includes noise source modelig and prediction, acoustic testing, noise reduction, and low noise design. The applications can be components, such as engines and airframe, as well as aircraft systems that account for all the components and operation conditions. The applications also cover both current generation of commercial aircraft and future aircraft configurations.</p>
      </div>

      <div>
        <h2>Noise Modeling and Prediction</h2>
        <ul>
          <li>Physics-based noise source modeling and noise prediction</li>
          <li>High fidelity numerical simulation</li>
          <li>Engineering prediction of aircraft system noise</li>
        </ul>
      </div>

      <div>
        <h2>Acoustic Testing</h2>
        <ul>
          <li>Advanced measurement technology such as phased microphone array</li>
          <li>Wind tunnel testing</li>
          <li>Flight testing</li>
          <li>Acoustic data processing and analysis</li>
        </ul>
      </div>

      <div>
        <h2>Noise Reduction</h2>
        <ul>
          <li>Produce dependent noise reduction technology</li>
          <li>Noise reduction concept maturation and application</li>
          <li>Noise reduction assessment on system level</li>
        </ul>
      </div>

      <div>
        <h2>Low Noise Design</h2>
        <ul>
          <li>Low noise design tool development</li>
          <li>Product dependent low noise technology</li>
          <li>Assessment of low noise design on system level</li>
        </ul>
      </div>

    </div>
  );
}
