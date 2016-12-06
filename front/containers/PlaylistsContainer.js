import React from 'react';
import {connect} from 'react-redux';
import Playlist from '../components/Playlist';

const Playlists = props => (
  props.playlists.length > 0 ?
    <ul>
      {
        props.playlists.map((playlist, indx) => (
          <li key={indx}><Playlist name={playlist.title} id={playlist.id} /></li>
        ))
      }
    </ul> : null
)

const mapStateToProps = (state) => {
  return {playlists: state.playlists}
}

export default connect(mapStateToProps)(Playlists)
