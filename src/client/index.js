import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from '../shared/store/configureStore';

import AppRoutes from '../shared/routes/index';

render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('app')
);
