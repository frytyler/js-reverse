'use strict';
/**
 * Тут впишу копирайты или ещё что-нибудь
 */
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
        this.urls_all = {};
        this.url_constructor = new Constructor();
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
     * Register all urls
     * Urls param must be an object with name as a key and wildcard with <> brackets as a value like
     * {url_one: '/home/<param_one>/<param_two>/'}
     * @param {Object} urls: object with url name as a key and wildcard with <> brackets as a value
     */
    register(urls) {
        this.urls_all = urls;
    }

    /**
     * Get url from library by name
     * @param {String} name: name of url
     * @param {Object} args: object with url arguments and its values like {param_one: 1: param_two: "something"}
     * @return {String}: valid url
     */
    get(name, args) {
        if (this.nameIsValid(name)) {
            return this.hostname + this.url_constructor.get(this.urls_all[name], args);
        }
    }
}

module.exports = URLSLibrary;
