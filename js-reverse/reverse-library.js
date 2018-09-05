'use strict';
/**
 * Тут впишу копирайты или ещё что-нибудь
 */
const Constructor = require('./reverse-url');

class URLSLibrary {
    /** 
    * URLS-library stores all registered urls
    */
    constructor(hostname) {
        this.hostname = hostname;
        this.urls_all = {};
        this.url_constructor = new Constructor()
    }

    register(urls) {
        /**
        * Register all urls. 
        * Urls param must be an object with name as a key and wildcard with <> brackets as a value like
        * {url_one: '/home/<param_one>/<param_two>/'}
        * @param {Object} urls: object with url name as a key and wildcard with <> brackets as a value
        */
        this.urls_all =  urls;
    }

    get(name, args) {
        /**
        * Get url from library by name
        * @param {String} name: name of url
        * @param {Object} args: object with url arguments and its values like {param_one: 1: param_two: "something"}
        */
        // Here we use our ReverseUrl class
        return this.hostname + this.url_constructor.get(this.urls_all[name], args)
    }
}

module.exports = URLSLibrary;
