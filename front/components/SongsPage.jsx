import React from 'react'
import DisplaySong from './DisplaySong'

const SongsPage = (props) => {
  return (
    <div>
      {
        props.songs ? props.songs.map((song, index) =>(
          <DisplaySong key={index} song={song} showVideo={props.actions.showVideo} isVideo={props.isVideo}/>
        )): null
      }
    </div>
  )
}

export default SongsPage
