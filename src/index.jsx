import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './router/router';
import App from 'containers';

render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('root'));
