const router = require('express').Router();
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

const getSongs = (req, res) => {
  Song.findAll()
    .then((songs) => {
      res.send(songs);
    })
}

router.route('/')
  .get(getSongs);

module.exports = router;
