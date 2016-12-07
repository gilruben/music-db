import {combineReducers} from 'redux';

import artistReducer from './artist-reducer';
import songReducer from './song-reducer'
import playlistReducer from './playlist-reducer';

export const rootReducer = combineReducers({
  artistReducer,
  songReducer,
  playlistReducer
});
