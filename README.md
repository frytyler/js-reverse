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

library.get('allImages');
// big-cat-database.com/images/all/

library.get('catImage', {animal: 'cat', id: 9000});
// big-cat-database.com/images/cat/9000/
```
