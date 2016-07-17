import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from '../components/Layout/Main';

import About from '../components/About';
import Cats from '../components/Cats';

import TodosApp from '../components/Todos/TodosApp';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={TodosApp} />
      <Route path="/about" component={About} />
      <Route path="/funny-cats" components={Cats} />
    </Route>
  </Router>
);
