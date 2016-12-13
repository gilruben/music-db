import React from 'react';
import {connect} from 'react-redux';
import SongItem from '../components/SongItem';

const CreatePlaylistContainer = React.createClass({
  getInitialState(){
    return {playlistName: '', songTitle: '', artist: '', youtube_url: '', isCreate: false};
  },
  handleChange(){

  },
  render(){
    let songs = this.props.songs;

    return (
      <div>
        <input type="text" placeholder="Playlist Name" onChange={this.handleChange}/>

        {
          this.state.isCreate ?
            <div>

            </div>  : null;
        }
        {songs.map((song, indx) => {
          return <SongItem key={indx} artist={song.artist.name} title={song.title} />
        })}
      </div>
    )
  }
})

const mapStateToProps = state => {
  let artistTitle = state.songReducer.songs.reduce((songsArr, song) => {
    return [...songsArr, {id: song.id, title: song.title, artist: song.artist.name}]
  }, [])

  return {songs: state.songReducer.songs}
}

export default connect(mapStateToProps)(CreatePlaylistContainer)
