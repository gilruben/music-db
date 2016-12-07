import React from 'react';

const Playlist = React.createClass({
  getInitialState(){
    return {id: this.props.id}
  },
  render(){
    return <div className={this.props.className}>{this.props.name}</div>
  }
})

export default Playlist;
