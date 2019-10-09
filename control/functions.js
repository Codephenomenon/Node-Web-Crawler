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
    },
    splitHttp: function(search) {
        if (search.includes('//')) {
            console.log('includes slash');
        } 
        else {
            console.log('does not include slash')
        }
    },
    splitCom: function(search) {
        if (search.includes('.com')) {
            console.log('includes .com');
        } 
        else {
            console.log('does not include .com')
        }
    }
}