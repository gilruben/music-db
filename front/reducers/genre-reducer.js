import {GET_GENRES, GENRE_SEARCH, NEW_GENRES} from '../actions/types';

const initialState = {
  genres: [],
  searchInput: '',
  newGenres: []
};

export default function(state = initialState, action){
  switch(action.type){
    case GET_GENRES:
    case GENRE_SEARCH:
    case NEW_GENRES:
      let key = Object.keys(action)[1];
      return Object.assign({}, state, {[key]: action[key]})
    default:
      return state
  }
}
