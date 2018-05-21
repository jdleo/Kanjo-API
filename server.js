const express = require('express');
const bodyParser = require('body-parser');

// for express app
const app = express();

// port to listen on
const port = 8000;

// to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// for our endpoint
require('./app/routes')(app);

// start listening on port
app.listen(port, () => {
  console.log('Kanjo is live on port ' + port);
});
