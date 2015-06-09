module.exports.setup = function(app) {
  app.get('/admin/questions/new', function(req, res) {
    res.send('hi')
  });
}
