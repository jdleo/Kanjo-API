// file for managing URL routes

module.exports = function(app) {
  app.get('/test', function (req, res) {
  res.send('Test received.');
});
}
