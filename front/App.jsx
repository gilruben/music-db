import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import {getAllArtists} from './route-utils';

//components
import Nav from './components/Nav';
import ArtistsContainer from './containers/ArtistsContainer';
import SongsContainer from './containers/SongsContainer';
import PlaylistsContainer from './containers/PlaylistsContainer';
import CreatePlaylistContainer from './containers/CreatePlaylistContainer';
import NewSongContainer from './containers/NewSongContainer';


//redux
const App = (props) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Nav}>
        <IndexRoute onEnter={getAllArtists} component={ArtistsContainer} />
        <Route path="/songs" component={SongsContainer} />
        <Route path="/playlists" component={PlaylistsContainer} />
        <Route path="/create-playlist" component={CreatePlaylistContainer} />
        <Route path="/new-song" component={NewSongContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
