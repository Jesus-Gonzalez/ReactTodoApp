// Dependencies imports
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Redux related stuff
import todoApp from './reducers/todoApp';

// Presentational components
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Cats from './components/Cats.jsx';

// Container components
import TodosList from './components/Todos.jsx';

// Create the store
const store = createStore(todoApp);

render(
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route path="/" component={Main}>
              <IndexRoute component={TodosList} />
              <Route path="/about" component={About} />
              <Route path="/funny-cats" components={Cats} />
            </Route>
          </Router>
        </Provider>,
        document.getElementById('app'));
