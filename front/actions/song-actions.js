import $ from 'jquery'
import {GET_ALL_SONGS} from './types'

export const getAllSongs = (songs) => (
  {
    type: GET_ALL_SONGS,
    songs
  }
)

export const getSongsAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/api/songs',
    dataType: 'json',
    type: 'get'
  })
  .done(songs => {
    dispatch(getAllSongs(songs));
  })
}
