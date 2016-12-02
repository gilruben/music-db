const router = require('express').Router()
const Artist = require('../models/artist-model')

router.route('/')
  .get((req, res)=>{
    res.send('hello')
  })

module.exports = router

// /api/artists GET all artists, ordered a-z
// /api/artists/:id GET a specific artist by id
// /api/artists/ POST (create) a new artist
// /api/artists/:id DELETE an artist by id
// /api/artists/:id/:newName PUT (update) a specific artist's name