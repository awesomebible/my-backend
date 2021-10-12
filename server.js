const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

init().catch(err => console.log(err));

async function init() {
    await mongoose.connect(process.env.DB_AUTH)
}

app.get('/', (req, res) => {
  res.redirect("https://codeberg.org/awesomebible/my-backend");
});

app.get('/timeline', (req, res) => {
    // TODO: Fetch timeline

  });
app.post('/auth', (req, res) => {
    // TODO: Do Auth
});
app.post('/reset-password', (req, res) => {
    // TODO: Do Reset Password
});
app.post('/create-file', (req, res) => {
    // TODO: Create File
});
app.post('/create-post', (req, res) => {
    // TODO: Create Post
});
app.listen(3000, () => console.log('my.awesomeBible Server is listening on port 3000.'));