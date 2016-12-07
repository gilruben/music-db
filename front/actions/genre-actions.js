import $ from 'jquery'
import {GET_GENRES, GENRE_SEARCH, NEW_GENRES} from './types'

export const getAllGenres = (genres) => (
  {
    type: GET_GENRES,
    genres
  }
)

export const getGenresAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/api/genres',
    dataType: 'json',
    type: 'get'
  })
  .done(genres => {
    dispatch(getAllGenres(genres));
  })
}

export const genreSearchInput = (searchInput) => (
  {
    type: GENRE_SEARCH,
    searchInput
  }
)

export const makeNewGenre = (newGenres) => (
  {
    type: NEW_GENRES,
    newGenres
  }
)