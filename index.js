'use strict';
 
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const functions = require('./control/functions.js');

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));

app.listen(4000, () => {
    console.log('Listening on port 4000.');
});

app.get('/', function (req, res) {
    res.render("layout", {
        title: 'Node Crawler',
        results: '',
        keywords: ''
    });
});

app.post('/search', function (req, res, next) {
    let site = req.body.url;
    const keyWords = req.body.keyWords;
    site = functions.splitHttp(site);
    site = functions.splitCom(site);
    functions.getRequest(site, keyWords);
    res.send({responseURL: '/search'});
}); 

// Render response component
app.get('/search', function (req, res, next) {
    res.render("layout", {
        title: 'Crawler Results',
        results: 'THIS IS A TEST',
        keywords: 'wowza'
    });
});
