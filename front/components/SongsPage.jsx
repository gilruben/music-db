import React from 'react'
import DisplaySong from './DisplaySong'

const SongsPage = (props) => {
  console.log(props)
  return (
    <div>

      {
        props.songs ? props.songs.map((song, index) =>(
          <DisplaySong key={index} song={song} showVideo={props.showVideo} isVideo={props.isVideo}/>
        )): null
      }
    </div>
  )
}

export default SongsPage

