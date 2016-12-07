const router = require('express').Router();
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

const getSongs = (req, res) => {
  Song.findAll({include: [Artist, Genre]})
    .then((songs) => {
      res.send(songs);
    })
}

const createSong = (req, res) => {
  // let genres = JSON.parse(req.body.genres);
  // var promises = genres.map(function(genre){
  //   return Genre.findOrCreate({where: {title: genre}});
  // });
  // Promise.all(promises)
  // .then( genres => genres.map(genre => genre[0].dataValues.id)
  // )
  // .then(genreIds => {})
  let newSong;

  Artist.findOrCreate({where: {name: req.body.artist}})
  .then(artist => {
    let songData = {};
    songData.artistId = artist[0].id;
    songData.title = req.body.title;
    songData.youtube_url = req.body.youtube_url;

    return Song.findOrCreate({where: songData})
  })
  .then(song => {
    newSong = song
  })
  .then(() => {
    let genres = JSON.parse(req.body.genres);
    return genres.map(genre => Genre.findOrCreate({where: {title: genre}}));
  })
  .then(genres => Promise.all(genres))
  .then( genres => genres.map(genre => genre[0].dataValues.id))
  .then(genreIds =>{
    console.log(genreIds)
    newSong[0].addGenres(genreIds);

    console.log('Post successful');
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Something went wrong');
    res.sendStatus(500)
  })

}

const getSongById = (req, res) => {
  Song.findById(req.params.id, {include: [Artist, Genre]})
    .then((song) => {
      res.send(song);
    })
}

const updateSong = (req, res) => {
  Song.update({title: req.params.newTitle}, {where: {id: req.params.id}})
    .then(() => {
      console.log("Update successful");
      res.status(200)
    })
    .catch((err) => {
      console.log("Update failed");
    })
}

const deleteSong = (req, res) => {
  Song.destroy({where: {id: req.params.id}})
    .then(() => {
      console.log('Song deleted');
    })
}

router.route('/')
  .get(getSongs)
  .post(createSong);

router.route('/:id')
  .get(getSongById)
  .delete(deleteSong);

router.route('/:id/:newTitle')
  .put(updateSong)

module.exports = router;
