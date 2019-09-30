const request = require('request');
const cheerio = require('cheerio');

//  JACCARD'S INDEX

module.exports = {
    getRequest: function(search) {
        request(search, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                console.log(html);
            }
        });
    }
}