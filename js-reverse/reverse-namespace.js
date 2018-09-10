'use strict';

/**
 * TEST
 */
class NameSpace {
    /**
     * Const
     */
    constructor() {
        this.baseUrl = '';
        this.urls = null;
    }

    /**
     * TEST
     */
    addNamespace() {
        let newUrls = {};
        Object.keys(this.urls).forEach((key) => {
            newUrls[key] = `${this.baseUrl}/${this.urls[key]}`;
        });
        return newUrls;
    }

    create(baseUrl='', urls) {
        this.baseUrl = baseUrl;
        this.urls = urls;
        return this.addNamespace();
    }
}

module.exports = NameSpace;

// named_urls = namespace.add('/test/<hello>/ololo/');

// library.register(named_urls);

// library.get('allImages', {hello: 'world'})
