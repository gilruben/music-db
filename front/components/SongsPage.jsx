import React from 'react'

const SongsPage = props => {
  console.log(props.songs)
  return (
      <div>
      {
        props.songs ? props.songs.map((song, index) =>(
          <li key={index}>{song.title}</li>  
        )): null
      }
    </div>
  )
}

export default SongsPage