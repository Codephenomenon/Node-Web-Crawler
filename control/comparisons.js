'use strict';

//  JACCARD'S INDEX

let siteData = {
    title: '',
    headers: [],
    bodyText: []
}

module.exports = {
    filterSiteData: function(parsedElement) {
        console.log(parsedElement);

        for (let childElement in parsedElement) {
            if (typeof childElement == "object" && childElement !== null) {
                filterSiteData(obj[k]);
            } else {
                console.log(childElement);
            }
        }
    },
    setSiteTitle: function(parsedTitle) {
        siteData.title = parsedTitle;
    }
}