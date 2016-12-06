import {GET_ARTISTS} from '../actions/artist-actions';

const initialState = {playlists: [], artists: []};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ARTISTS:
      return Object.assign({}, state, {artists: action.payload})
    default:
      return state
  }
}

export default reducer;
