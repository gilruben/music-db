import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import routes from './routes'

require('./scss/app.scss')

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
