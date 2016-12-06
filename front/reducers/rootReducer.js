import {combineReducers} from 'redux';

import artistReducer from './artistReducer';
import songReducer from './songReducer'

export const rootReducer = combineReducers({
  artistReducer,
  songReducer
});