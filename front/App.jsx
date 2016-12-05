import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
//import {Provider} from 'react-redux';
import Nav from './components/Nav';

const App = (props) => (
    <Router history={browserHistory} >
      <Route path="/" component={Nav}>

      </Route>
    </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
