import {GET_GENRES} from '../actions/types';

const initialState = {
  genres: [],
};

export default function(state = initialState, action){
  switch(action.type){
    case GET_GENRES:
      let key = Object.keys(action)[1];
      return Object.assign({}, state, {[key]: action[key]})
    default:
      return state
  }
}