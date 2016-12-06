import {GET_ALL_SONGS, SHOW_VIDEO} from '../actions/types';

const initialState = {
  songs: [],
  isVideo: false
};

export default function(state = initialState, action){
  switch(action.type){
    case GET_ALL_SONGS:
    case SHOW_VIDEO:
      let key = Object.keys(action)[1];
      return Object.assign({}, state, {[key]: action[key]})
    default:
      return state
  }
}
