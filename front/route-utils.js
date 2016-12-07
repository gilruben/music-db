import store from './store/store';
import {getArtistsAsync} from './actions/artist-actions';
import {getSongsAysnc} from './actions/song-actions';
import {getPlaylistsAsync} from './actions/playlist-actions';


export const getAllArtists = () => {store.dispatch(getArtistsAsync())};
export const getSongs = () => {store.dispatch(getSongsAysnc())};
export const getAllPlaylists = () => {store.dispatch(getPlaylistsAsync())};
