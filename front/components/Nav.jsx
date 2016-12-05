import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'

const Nav = (props) => (
  <div>
    <Link className="nav" to="/">Music API</Link>
    <Link className="nav" to="/artists">Artist</Link>
    <Link className="nav" to="/songs">Songs</Link>
    <Link className="nav" to="/playlists">Playlists</Link>
    <Link className="nav" to="/create-playlist">Create Playlist</Link>
    <Link className="nav" to="/new-song">New Song</Link>
  </div>
)

export default Nav;
