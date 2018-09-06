'use strict';
/**
 * Тут впишу копирайты или ещё что-нибудь
 */

/**
 * URLS constructor. Creates url from wildcard
 */
class URLConstructor {
    /**
     * Constructor
     */
    constructor() {
        this.params = {};
    }

    /**
     * Set params into url using wildcard
     * @param {String} wildcard: url-string with params in <> brackets
     * @return {String}: valid url
     */
    construct(wildcard) {
        let newUrl = '';
        wildcard.split('/').forEach((part) => {
            // params in urls is located between <> so this is check if part of url is param
            if (part.startsWith('<') && part.endsWith('>')) {
                newUrl += this.createWildcardParam(part.slice(1, part.length - 1));
            }
            else {
                newUrl += part;
            }
            newUrl += (newUrl.endsWith('/')) ? '' : '/';
        });
        return newUrl;
    }

    /**
     * Check if dict with params has param which mentioned in url or
     * dict with param is passed into URLConstructor
     * @param {String} paramName: name of parameter in url, closed between <> brackets
     * @return {bool}: is url valid?
     */
    urlIsValid(paramName) {
        if (paramName && !this.params) {
            throw new Error(`js-reverse: Url contains wildcard called <${paramName}> but not contains params objects`);
        }
        else if (!this.params[paramName]) {
            throw new Error(`js-reverse: Url parameter named "${paramName}" is undefined`);
        }
        return true;
    }

    /**
     * Returns param from object, that stores params
     * @param {String} paramName: name of parameter in url
     * @return {String}: param from object, that stores params
     */
    createWildcardParam(paramName) {
        if (this.urlIsValid(paramName)) {
            return this.params[paramName];
        }
    }

    /**
     * Just get url
     * @param {String} wildcard: url with params names in <> brackets
     * @param {object} params: object with url arguments and its values like {param_one: 1: param_two: "something"}
     * @return {String}: valid url
     */
    get(wildcard, params) {
        this.params = params;
        return this.construct(wildcard);
    }
}

module.exports = URLConstructor;
