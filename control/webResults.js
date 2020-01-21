import { Webpage } from './webPages';

export default class ResultsController {
    constructor() {
        this.search = {};
        this.results = [];
    }

    addSearch(search) {
        this.search = search;
    }

    addResult(webPage) {
        this.results.push(webPage);
    }
}