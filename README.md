# js-reverse

Allows to store urls in one place and get it everywhere you want. Just like in Django.

## How to use

### Define urls in one place

```Javascript
const urls = {
    'allImages': '/images/all/',
    'catImage': '/images/<animal>/<id>/',
};

module.exports = urls;
```

### Use it everywhere you want

```Javascript
const Library = require('./js-reverse/reverse-library');
const urls = require('./urls');

const library = new Library('big-cat-database.com');
library.register(urls);

library.get('allImages');
// big-cat-database.com/images/all/

library.get('catImage', {animal: 'cat', id: 9000});
// big-cat-database.com/images/cat/9000/
```