'use strict';

// Set const variables
const PORT = 8200;
const HOST = '0.0.0.0';

// Import express
const express = require('express');
const app = express();
// set static file directory
app.use(express.static("/usr/src/app/model/"));
// set view engine as ejs
app.set('view engine', 'ejs');


// Application Router
app.get('/original', async(req, res) => {
  console.log("access to /original");
  res.render("original", {});
});

app.get('/mobilenet', async(req, res) => {
  console.log("access to /mobilenet");
  res.render("mobilenet", {});
});

app.listen(PORT, HOST);

