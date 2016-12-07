import {GET_PLAYLISTS} from '../actions/playlist-actions';

let initialState = {playlists: []};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PLAYLISTS:
      return Object.assign({}, state, {playlists: action.payload});
    default:
      return state;
  }
}

export default reducer;
