'use strict';

class Webpage {
    constructor(title, headerText, bodyText, keyWords) {
        this._title = title || '';
        this._headerText = headerText || [];
        this._bodyText = bodyText || [];
        this._keyWords = keyWords || ['Entertainment'];
    }

    get Title() {
        return this.title;
    }
    get headerText() {
        return this.headerText;
    }
    get bodyText() {
        return this.bodyText;
    }
}

module.exports = Webpage;