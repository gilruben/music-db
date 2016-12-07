import $ from 'jquery';

export const GET_PLAYLISTS = 'GET_PLAYLISTS';

export const getPlaylists = (playlists) => (
  {
    type: GET_PLAYLISTS,
    payload: playlists
  }
)

export const getPlaylistsAsync = () => (dispatch) => {
  $.ajax({
    url: '/api/playlists',
    dataType: 'json',
    type: 'GET'
  }).done((data) => {
    dispatch(getPlaylists(data));
  })
}
