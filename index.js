const express = require('express');
const app = express();
const path = require('path');
const functions = require('./control/functions.js');

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));

app.listen(4000, () => {
    console.log('Listening on port 4000.');
});

app.get('/', function (req, res) {
    res.render("layout", {
        title: 'Node Crawler'
    });
});

app.post('/search', function (req, res, next) {
    console.log(req.data);
    //functions.getRequest('http://www.codedemos.com/sampleblog');
});
