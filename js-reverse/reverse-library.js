'use strict';
const Constructor = require('./reverse-url');

/**
 * URLS library. Stores all registered urls
 */
class URLSLibrary {
    /**
     * Constructor
     * @param {String} hostname: name of the host which will be added to the start of url
     */
    constructor(hostname) {
        this.hostname = hostname;
        this.urlsAll = {};
        this.urlConstructor = new Constructor();
    }

    /**
     * Check if name of url is valid and throw error if not
     * @param {String} name: name of url
     * @return {bool}: url is valid?
     */
    nameIsValid(name) {
        if (typeof name !== 'string') {
            throw new Error('js-reverse: url name must be a string');
        }
        return true;
    }

    /**
     * Check if library has urls
     * @return {bool}: is urls registered?
     */
    urlsIsRegistered() {
        if (!this.urlsAll || !Object.keys(this.urlsAll).length) {
            throw Error('js-reverse: no urls registered');
        }
        return true;
    }

    /**
     * Register all urls
     * Urls param must be an object with name as a key and wildcard with <> brackets as a value like
     * {url_one: '/home/<param_one>/<param_two>/'}
     * @param {Object} urls: object with url name as a key and wildcard with <> brackets as a value
     */
    register(urls) {
        this.urlsAll = urls;
    }

    /**
     * Get url from library by name
     * @param {String} name: name of url
     * @param {Object} args: object with url arguments and its values like {param_one: 1: param_two: "something"}
     * @param {Object} queryString: query string in the end of the url
     * @return {String}: valid url
     */
    get(name, args, queryString={}) {
        if (this.nameIsValid(name) && this.urlsIsRegistered()) {
            return this.hostname + this.urlConstructor.get(this.urlsAll[name], args, queryString);
        }
    }
}

module.exports = URLSLibrary;
