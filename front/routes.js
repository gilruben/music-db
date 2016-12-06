import React from 'react'
import {Route, IndexRoute} from 'react-router'

//components
import Nav from './components/Nav';
import ArtistsContainer from './containers/ArtistsContainer'
import SongsContainer from './containers/SongsContainer'
import PlaylistsContainer from './containers/PlaylistsContainer'
import CreatePlaylistContainer from './containers/CreatePlaylistContainer'
import NewSongContainer from './containers/NewSongContainer'

//redux
import store from './store/store'
import {getSongsAysnc} from './actions/song-actions'
import {getGenresAysnc} from './actions/genre-actions'
const getSongs = () => {store.dispatch(getSongsAysnc())}
const getGenres = () =>{store.dispatch(getGenresAysnc())}

export default (
  <Route path="/" component={Nav}>
    <IndexRoute component={ArtistsContainer} />
    <Route path="songs" onEnter={getSongs} component={SongsContainer}  />
    <Route path="playlists" component={PlaylistsContainer} />
    <Route path="create-playlist" component={CreatePlaylistContainer} />
    <Route path="new-song" onEnter={getGenres} component={NewSongContainer} />  
  </Route> 
);