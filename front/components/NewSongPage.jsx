import React from 'react'
import SearchGenres from './SearchGenres'

const NewSongPage = props => {
  return (
    <div>NewSongPage
      <SearchGenres genres={props.genres}/>
    </div>
  )
}

export default NewSongPage