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

    create_wildcard_param(param_name) {
        return this.params[param_name]
    }

    get(wildcard, params) {
        this.params = params;
        return this.construct(wildcard)
    }
}

module.exports = URLConstructor
