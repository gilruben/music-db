import $ from 'jquery';

export const GET_PLAYLIST_SONGS = 'GET_PLAYLIST_SONGS';

export const getPlaylistSongs = (data) => (
  {
    type: GET_PLAYLIST_SONGS,
    payload: data
  }
)

export const getPlaylistSongsAsync = (id) => (dispatch) => {
  let genresArr = [];

  $.ajax({
    url: `/api/playlists/${id}`,
    type: 'GET'
  }).done((data) => {
    data.songs.forEach((song) => {
      song.genres.forEach((genre) => {
        if(genresArr.indexOf(genre.title) === -1) genresArr.push(genre.title);
      })
    });
  }).then((data) => {
    dispatch(getPlaylistSongs({playlistSongs: data.songs, genres: genresArr}));
  })
}
