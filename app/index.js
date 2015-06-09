var express = require('express');
var app = express();

var questionsController = require('./controllers/admin/questions/questions');
questionsController.setup(app);

module.exports = app;
