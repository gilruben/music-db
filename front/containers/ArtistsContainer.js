import React from 'react';
import {connect} from 'react-redux'
import Artist from '../components/Artist'


const ArtistsContainer = props => (
  props.artists ?
    <ul>
      {props.artists.map((artist, indx) => (
        <li key={indx}><Artist name={artist.name} id={artist.id} /></li>
      ))}
    </ul> : null
)

const mapStateToProps = (state) => {
  return {artists: state.artistReducer.artists}
}

export default connect(mapStateToProps)(ArtistsContainer)
