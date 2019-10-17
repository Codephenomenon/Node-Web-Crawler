const request = require('request');
const cheerio = require('cheerio');
const CircularJSON = require('circular-json');

module.exports = {
    getRequest: function(search) {
        request(search, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                const title = $('title');
                const body = $('body');
                
                let serialElement = CircularJSON.stringify(body.children());
                var parsedElement = CircularJSON.parse(serialElement);
                console.log(parsedElement);

                // Remove junk tags that don't contain text
                Object.keys(parsedElement).forEach(function(child) {
                    if (child.type !== 'text' || child.type !== 'tag') {
                        delete parsedElement[child];
                    }
                });

                console.log(parsedElement);
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