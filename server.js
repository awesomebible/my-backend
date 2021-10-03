const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.redirect("https://codeberg.org/awesomebible/my-backend");
});

app.get('/timeline', (req, res) => {
    // Fetch timeline
  });
app.post('/auth', (req, res) => {
    // Do Auth
});
app.post('/reset-password', (req, res) => {
    // Do Auth
});
app.post('/create-file', (req, res) => {
    // Create File
});
app.post('/create-post', (req, res) => {
    // Create Post
});

app.listen(3000, () => console.log('my.awesomeBible Server is listening on port 3000.'));