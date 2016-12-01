const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const songsRouter = require('./routes/song-router');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

//Test to see if the connection worked
sequelizeConnection.authenticate()
.then(() => {
  console.log('Sequelize connection successful');

  app.use('/api/songs', songsRouter);

  //listen on port 8888
  app.listen('9999', () => console.log('Listening on port 9999'));
})
.catch((err) => console.log('Unable to connect to the database:', err));


//////////
// YOUR CODE HERE:
//////////
