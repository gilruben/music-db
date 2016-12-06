import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/song-actions'
import SongsPage from '../components/SongsPage' 

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
  songs: state.songReducer.songs, 
  isVideo: state.songReducer.isVideo
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsPage)
