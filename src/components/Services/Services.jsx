import React, { Component } from 'react';
import './_Services.scss';

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <article>
          <h2>Software Development</h2>
          <p>NEAT Consulting has world-class expertise in developing speciality acoustic software for customers in industries such as commercial aircraft, in both acoustic prediction and low noise design. Customers can choose any combinations of modules and methods from a complete suite of choices to meet their needs, packaged in a streamlined, easy-to-use software for quick deployment and applications. Customers and NEAT Consulting can also jointly develop specialty engineering tools, for which the customers own the IP rights of the tool package and have the opportunity to develop their own expertise.</p>
        </article>
        <article>
          <h2>Technical Project Planning and Execution</h2>
          <p>NEAT Consulting provides complete turn-key technology for acoustic project planning and execution. With customer requirements and objectives, NEAT Consulting defines technical plans to best meet customers' needs. The plans can include design and prediction tool development, testing facility requirement and selection, and technology maturation and transfer.</p>
        </article>
        <article>
          <h2>Technical Service and Consulting</h2>
          <p>Customers employ NEAT Consulting to perform specific technical tasks in the form of technical contract, usually as part of large projects for which the customers need technical help in some special areas. These can be in the form of performing parts of the design and prediction work, participating in the acoustic testing, providing expertise in technology development, and/or advising on the best application of acoustic technologies to the customers' products.</p>
        </article>
        <article>
          <h2>Technical Training</h2>
          <p>NEAT Consulting offers customers technical training in noise engineering and acoustic technology. Customers can define specific topics, and NEAT Consulting provides training in these topics with formats including seminars, workshops, short courses, and on-job training.</p>
        </article>
      </div>
    );
  }
}
