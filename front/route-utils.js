import store from './store/store';
import {getArtistsAsync} from './actions/artist-actions';
import {getSongsAysnc} from './actions/song-actions';
import {getPlaylistsAsync} from './actions/playlist-actions';
import {getPlaylistSongsAsync} from './actions/playlistsongs-actions';
import {getGenresAysnc} from './actions/genre-actions';

export const getAllArtists = () => {store.dispatch(getArtistsAsync())};
export const getSongs = () => {store.dispatch(getSongsAysnc())};
export const getAllPlaylists = () => {store.dispatch(getPlaylistsAsync())};
export const getAllPlaylistSongs = (nextState) => {store.dispatch(getPlaylistSongsAsync(nextState.params.id))};
export const getGenres = () =>{store.dispatch(getGenresAysnc())}
