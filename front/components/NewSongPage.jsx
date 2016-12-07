import React from 'react'
import SearchGenres from './SearchGenres'

const NewSongPage = props => {
  return (
    <div>NewSongPage
      <SearchGenres 
        genres={props.genres}
        genreSearchInput={props.actions.genreSearchInput}
        makeNewGenre={props.actions.makeNewGenre}
        searchInput={props.searchInput}
        newGenres={props.newGenres}
      />
    </div>
  )
}

export default NewSongPage