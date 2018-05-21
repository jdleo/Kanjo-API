// file for managing URL routes

module.exports = function(app) {
  app.post('/analyze', function (req, res) {
    res.send(req.body.text);
  });
}
