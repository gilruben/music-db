import {combineReducers} from 'redux';

import artistReducer from './artist-reducer';
import songReducer from './song-reducer'
import playlistReducer from './playlist-reducer';
import playlistSongsReducer from './playlistsongs-reducer';
import genreReducer from './genreReducer';

export const rootReducer = combineReducers({
  artistReducer,
  songReducer,
  playlistReducer,
  playlistSongsReducer,
  genreReducer
});
