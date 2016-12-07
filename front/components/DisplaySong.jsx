import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import DisplayVideo from './DisplayVideo'

const DisplaySong = props => {

  //when the button is clicked. check to see if the video is open
  let isVideoDisplayed = props.isVideo === props.song.id 
  let checkIfOpen = isVideoDisplayed ? false : props.song.id
  return (
    <article className="displaySong">
      <div className="songInfo">
        <h2>{props.song.title}</h2>
        <h2>{props.song.artist.name}</h2>
        <button onClick={()=>props.showVideo(checkIfOpen)}>
          {isVideoDisplayed ? "Hide Video" : "Show Video"}
        </button>
        {
          props.button ? 
            <button onClick={addToPlaylist}>+</button>
          : null
        }
      </div>
      <ReactCSSTransitionGroup
          transitionName="videoModal"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {
          isVideoDisplayed? 
            <DisplayVideo youtube_url={props.song.youtube_url} />
          : null 
        }
      </ReactCSSTransitionGroup>
    </article>  
  )
}       

export default DisplaySong