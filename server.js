'use strict';

const express = require('express');

// Constants
const PORT = 8089;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.get('/health', function (req, res) {
  res.send('');
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
