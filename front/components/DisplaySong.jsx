import React from 'react'
import DisplayVideo from './DisplayVideo'

const DisplaySong = props => {
  let isVideoDisplay = !props.isVideo
  return (
    <article className="displaySong">
      <h2>{props.song.title}</h2>
      <h2>{props.song.artist.name}</h2>
      <button onClick={()=>props.showVideo(isVideoDisplay)}>{props.isVideo ? "Hide Video" : "Show Video"}</button>
      {
        props.button ? 
          <button onClick={addToPlaylist}>+</button>
        : null
      }
      {
        props.isVideo ? 
          <DisplayVideo youtube_url={props.song.youtube_url} />
        : null 
      }
    </article>  
  )
}

export default DisplaySong