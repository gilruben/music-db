import React from 'react';
import {connect} from 'react-redux';

const PlaylistSongsContainer = (props) => (
  <div>{props.params.id}</div>
)

const mapStateToProps = (state, ownProps) => {
  return {playlists: state.playlistReducer.playlists}
}


export default connect(mapStateToProps)(PlaylistSongsContainer);
