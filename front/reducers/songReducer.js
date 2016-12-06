import {GET_ALL_SONGS} from '../actions/types';

const initialState = {
  songs: [],
};

export default function(state = initialState, action){
  switch(action.type){
    case GET_ALL_SONGS:
    console.log(Object.assign({}, state, {songs: action.songs}))
      return Object.assign({}, state, {songs: action.songs})
    default:
      return state
  }
}
