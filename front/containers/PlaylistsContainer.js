import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Playlist from '../components/Playlist';

const Playlists = props => (
  props.playlists ?
    <ul>
      {
        props.playlists.map((playlist, indx) => (
          <li key={indx}>
            <Link to={`/playlists/${playlist.id}`}>
              <Playlist name={playlist.title} id={playlist.id} />
            </Link>
          </li>
        ))
      }
    </ul> : null
)

const mapStateToProps = (state) => {
  return {playlists: state.playlistReducer.playlists}
}

export default connect(mapStateToProps)(Playlists)
