'use strict';

const cheerio = require('cheerio');
//  JACCARD'S INDEX

let siteData = {
    title: '',
    headers: [],
    bodyText: []
}

module.exports = {
    filterSiteData: function(html) {
        const $ = cheerio.load(html);

        const title = $('title');
        siteData.title = title.text();

        let pageHeaders = $('h1', 'h2', 'h3', 'h4', 'h5', 'h6');

        let pageText = $('p');
        siteData.bodyText.push(pageText.text().replace(/[^a-zA-Z0-9 ]/g, ""));
        
        console.log(siteData);
                
            
    }
}