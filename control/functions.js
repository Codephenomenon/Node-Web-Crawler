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
        if (search.includes('https://') || search.includes('http://')) {
            return search;
        } 
        return `https://${search}`;
    },
    splitCom: function(search) {
        if (search.includes('.com')) {
            return search
        } 
        return `${search}.com`;
    }
}