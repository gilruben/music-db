import $ from 'jquery';

export const GET_ARTISTS = 'GET_ARTISTS';

export const getArtists = (data) => (
  {
    type: GET_ARTISTS,
    payload: data
  }
)

export const getArtistsAsync = () => (dispatch) => {
  $.ajax({
    url: '/api/artists',
    type: 'GET'
  }).done((data) => {
    dispatch(getArtists(data));
  })
}
