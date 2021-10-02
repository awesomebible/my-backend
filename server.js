const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.redirect("https://codeberg.org/awesomebible/my-backend");
});