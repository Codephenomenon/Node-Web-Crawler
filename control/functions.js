'use strict'; 

const request = require('request');
const comparisons = require('./comparisons.js');

module.exports = {
    getRequest: function(search) {
        request(search, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                comparisons.filterSiteData(html);
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