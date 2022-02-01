const express = require('express');
const app = express();
const mariadb = require('mariadb');
const { reset } = require('nodemon');
// require('./routines/inviteCodeIsValid')

const pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWD,
    connectionLimit: 5
});

app.get('/', (req, res) => {
  res.redirect("https://codeberg.org/awesomebible/my-backend");
});

app.get('/timeline', (req, res) => {
    // TODO: Fetch timeline
    res.send("hello world")
  });

app.post('/auth', (req, res) => {
    // TODO: Do Auth
    const email = req.query.email;
    const password = req.query.password;
    const inviteCode = req.query.inviteCode;

    // validate inviteCode _isn't_ in the DB
    /*if(!inviteCodeIsValid()){
        res.send("invite code isn't valid")
    };*/

    const UserSchema = new Schema({
        email: String,
        password: String,
        displayName: String
    });

});
app.post('/reset-password', (req, res) => {
    // TODO: Do Reset Password
});
app.post('/create-file', (req, res) => {
    // TODO: Create File
});
app.post('/create-post', (req, res) => {
    // TODO: Create Post
    const authtoken = req.query.token;
    const title = req.query.title;
    const content = req.query.content;
    const attatchment = req.query.attatchment;

    res.send("authtoken: "+authtoken+". title: "+title+". content: "+content)
    res.sendFile(att)
});
app.listen(3000, () => console.log('my.awesomeBible Server is listening on port 3000.'));