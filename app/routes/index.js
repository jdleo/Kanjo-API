// file for managing URL routes

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
module.exports = function(app) {
  app.post('/analyze', function (req, res) {
    res.send(sentiment.analyze(req.body.text));
  });
}
