import {GET_PLAYLIST_SONGS} from '../actions/playlistsongs-actions';

const initialState = {playlistSongs: null, genres: []};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PLAYLIST_SONGS:
      return {
        playlistSongs: action.payload.playlistSongs,
        genres: action.payload.genres
      }
    default:
      return state
  }
}

export default reducer;
