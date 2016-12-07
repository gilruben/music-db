import {connect} from 'react-redux'
import SongsPage from '../components/SongsPage' 

const mapStateToProps = (state) => ({
  songs: state.songReducer.songs
})

export default connect(mapStateToProps)(SongsPage)