'use strict';
/**
 * Тут впишу копирайты или ещё что-нибудь
 */

class URLConstructor {
    constructor() {
        this.params = {};
    }

    construct(wildcard) {
        /**
         * Set params into url using wildcard
         */
        let new_url = "";
        const url_parts = wildcard.split("/");
        url_parts.forEach(part => {
            if(part.startsWith('<') && part.endsWith('>')) {
                new_url += this.create_wildcard_param(part.slice(1, part.length - 1));
            }
            else {
                new_url += part;
            }
            new_url += (new_url.endsWith("/")) ? "" : "/";
        });
        return new_url;
    }

    url_is_valid(param_name) {
        /**
         * If url has <> bracket param but not have params value throw error
         */
        if(param_name && !this.params) {
            throw `js-reverse: Url contains wildcard called <${param_name}> but not contains params objects`
        }
        else if(!this.params[param_name]) {
            throw `js-reverse: Url parameter named "${param_name}" is undefined`
        }
        return true;
    }

    create_wildcard_param(param_name) {
        if(this.url_is_valid(param_name)) {
            return this.params[param_name];
        }
    }

    get(wildcard, params) {
        this.params = params;
        return this.construct(wildcard)
    }
}

module.exports = URLConstructor
