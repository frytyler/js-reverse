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

// const Namespace = require('./js-reverse/reverse-namespace');

// const namespace = new Namespace();

// const urls = {
//     allImages: '/images/all/',
//     catImage: '/images/<animal>/<id>/',
// };

// const space = namespace.create('/<language>/', urls);

// module.exports = space;
