import {combineReducers} from 'redux';

import artistReducer from './artistReducer';
import genreReducer from './genreReducer';
import songReducer from './songReducer'

export const rootReducer = combineReducers({
  artistReducer,
  genreReducer,
  songReducer
});