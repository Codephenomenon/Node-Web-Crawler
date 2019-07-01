const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const cheerio = require('request');

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));

app.get('/', function (req, res) {
    res.render("layout", {
        title: 'Node Crawler'
    });
    getRequest('http://www.codedemos.com/sampleblog');
});

app.listen(3000, () => {
    console.log('Listening on port 3000.');
});

//  JACCARD'S INDEX

const getRequest = (search) => {
    request(search, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            console.log(html);
        }
    });
}