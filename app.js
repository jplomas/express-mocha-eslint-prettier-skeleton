const express = require('express');
var app = (module.exports = express());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
