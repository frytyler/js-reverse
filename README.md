# js-reverse

Allows to store urls in one place and get it everywhere you want. Just like in Django.

## How to use

### Install

```
yarn add js-reverse
```

### Define urls in one place

```Javascript
//urls.js file

const urls = {
    'allImages': '/images/all/',
    'catImage': '/images/<animal>/<id>/',
};

module.exports = urls;
```

### Use it everywhere you want

```Javascript
import Library from 'js-reverse/js-reverse/reverse-library';
import urls from 'urls';

const library = new Library('big-cat-database.com');
library.register(urls);
```

#### Without params in urls

```Javascript
library.get('allImages');
// big-cat-database.com/images/all/
```

#### With params in `<>` brackets

```Javascript
library.get('catImage', {animal: 'cat', id: 9000});
// big-cat-database.com/images/cat/9000/
```

#### With query string
```Javascript
library.get('catImage', {animal: 'cat', id: 9000}, {paginateBy: 20, order: 'from_cute_to_ugly'});
// http://big-cat-database.com/images/cat/9000/?paginateBy=20&order=from_cute_to_ugly
```

### Tests

To run the tests just use `npm run test`. This starts the [Jasmine](https://jasmine.github.io) tests, that are located in the `spec` directory
