'use strict';

const cheerio = require('cheerio');
const htmlparser2 = require('htmlparser2');

//  JACCARD'S INDEX

const options = {
    withDomLvl1: true,
    normalizeWhitespace: false,
    xmlMode: true,
    decodeEntities: true
}

let siteData = {
    title: '',
    headers: [],
    bodyText: []
}

module.exports = {
    filterSiteData: function(html) {
        const dom = htmlparser2.parseDOM(html, options);
        const $ = cheerio.load(dom);

        const title = $('title');
        siteData.title = title.text();

        let pageHeaders = $('h1, h2, h3, h4, h5, h6');
        siteData.headers.push(pageHeaders.text().replace(/[^a-zA-Z0-9 ]/g, ''))

        let pageText = $('div, p, span, a, label');
        siteData.bodyText.push(pageText.text().replace(/[^a-zA-Z0-9 ]/g, ''));
        
        // Return filtered data to getRequest:
        return siteData; 
    }
}