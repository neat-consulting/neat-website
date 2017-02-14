import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from 'containers';
import { Home, Services, Expertise, About, Contact } from 'components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/Services" component={Services} />
    <Route path="/Expertise" component={Expertise} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
  </Route>
);
