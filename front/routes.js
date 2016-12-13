import React from 'react'
import {Route, IndexRoute} from 'react-router'

//components
import Nav from './components/Nav';
import ArtistsContainer from './containers/ArtistsContainer';
import SongsContainer from './containers/SongsContainer';
import PlaylistsContainer from './containers/PlaylistsContainer';
import PlaylistSongsContainer from './containers/PlaylistSongsContainer';
import CreatePlaylistContainer from './containers/CreatePlaylistContainer';
import NewSongContainer from './containers/NewSongContainer';

//redux
import store from './store/store';
import {getAllArtists, getSongs, getAllPlaylists, getAllPlaylistSongs, getGenres} from './route-utils';


export default (
  <Route path="/" component={Nav}>
    <IndexRoute onEnter={getAllArtists} component={ArtistsContainer} />
    <Route path="songs" onEnter={getSongs} component={SongsContainer}  />
    <Route onEnter={getAllPlaylists} path="playlists" component={PlaylistsContainer} />
    <Route onEnter={getAllPlaylistSongs} path="playlists/:id" component={PlaylistSongsContainer} />
    <Route onEnter={getSongs} path="create-playlist" component={CreatePlaylistContainer} />
    <Route path="new-song" onEnter={getGenres} component={NewSongContainer} />
  </Route>
);
