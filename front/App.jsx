import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import Nav from './components/Nav';
import ArtistContainer from './containers/ArtistContainer'

const App = (props) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Nav}>
        <IndexRoute component={ArtistContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
