// Require models
const Artist = require('./models/artist-model');
const Genre = require('./models/genre-model');
const Playlist = require('./models/playlist-model');
const Song = require('./models/song-model');

// Require routes
const artists = require('./routes/artist-router.js');
const genres = require('./routes/genre-router.js');
const playlists = require('./routes/playlist-router.js');
const songs = require('./routes/song-router.js');

module.exports = {
  models: {
    Artist: Artist,
    Genre: Genre,
    Playlist: Playlist,
    Song: Song,
  },
  routes: {
    artists: artists,
    genres: genres,
    playlists: playlists,
    songs: songs,
  }
}
