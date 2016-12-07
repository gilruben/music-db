import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../actions/song-actions'
import DisplaySong from '../components/DisplaySong';

const PlaylistSongsContainer = (props) => {
  return (
    <div>
      <br />
      <h3>{'Genre(s): '  + props.genres.join(', ')}</h3>


      {
        props.playlistSongs ? props.playlistSongs.map((song, indx) =>(
          <div key={indx}>
            <br />
            <div>{`Created at: ${song.createdAt}`}</div>
            <DisplaySong song={song} showVideo={props.actions.showVideo} isVideo={props.isVideo}/>
            <br />
          </div>
        )): null
      }

    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state, ownProps) => {
  return {
    playlistSongs: state.playlistSongsReducer.playlistSongs,
    genres: state.playlistSongsReducer.genres,
    isVideo: state.songReducer.isVideo,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSongsContainer);
