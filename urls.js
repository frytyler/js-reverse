'use strict';
const Library = require('./js-reverse/reverse-library');

const library = new Library('google.com');

const urls = {
    'first': '/test/test/<one>/<two>/<three>/',
    'second': '/test/test/<five>/<six>/<seven>/',
};

library.register(urls);

console.log(library.get('first', {'one': 2, 'two': 5, 'three': 'THREE'}));
