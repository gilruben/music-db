import React from 'react';

let SongItem = React.createClass({
  getInitialState(){
    return {id: this.props.id}
  },
  render(){
    return (
      <h4>
        {this.props.artist + '      ' + this.props.title}
      </h4>
    )
  }
})

export default SongItem
