const router = require('express').Router();
const Song = require('../models/song-model');

const getSongs = (req, res) => {
  res.send('getting songs')
}

router.route('/')
  .get(getSongs);

module.export = router;
