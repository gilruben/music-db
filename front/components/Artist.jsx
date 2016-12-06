import React from 'react';

const Artist = React.createClass({
  getInitialState(){
    return {id: this.props.id}
  },
  render() {
    return <div className={this.props.className}>{this.props.name}</div>
  }
})

export default Artist;
