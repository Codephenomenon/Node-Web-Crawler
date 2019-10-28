'use strict'; 

const request = require('request');
const comparisons = require('./comparisons.js');
const Webpage = require('./webpages');

module.exports = {
    getRequest: function(search) {
        request(search, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                let results = comparisons.filterSiteData(html);
                const resultPage = new Webpage(results.title, results.headers, results.bodyText);
                console.log(resultPage);
            } 
            else if (error) {
                console.error(error);
            }
            else {
                console.log(`Error in response: ${response.statusCode}.`);
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