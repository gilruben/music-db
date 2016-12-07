import {connect} from 'react-redux'
import NewSongPage from '../components/NewSongPage'

import {bindActionCreators} from 'redux'
import * as actions from '../actions/genre-actions'


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = state => ({
  genres: state.genreReducer.genres
})

export default connect(mapStateToProps, mapDispatchToProps)(NewSongPage)