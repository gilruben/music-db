import {connect} from 'react-redux'
import {showVideo} from '../actions/song-actions'
import SongsPage from '../components/SongsPage' 

const mapDispatchToProps = (dispatch) => ({
  showVideo: (arg) => dispatch(showVideo(arg))
})

const mapStateToProps = (state) => ({
  songs: state.songReducer.songs, 
  isVideo: state.songReducer.isVideo
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsPage)
