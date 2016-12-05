import {GET_ALL_ARTISTS} from '../actions/artist-actions';

const initialState = {playlist: []};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ALL_ARTISTS:
      console.log('Getting all posts');
      break;
    default:
      return state
  }
}

export default reducer;
