## bud-indexhtml

[index.html](http://npmjs.org/indexhtml) plugin for bud

## Install

```bash
$ npm install bud-indexhtml
```

## Usage

```js
var build = require('bud');
var indexhtml = require('bud-indexhtml');

build("dist/index.html", indexhtml({ dest: 'index.html', js: './build.js', css: './style.css' }));
```

## Options

* title (e.g "hello world")
* js (e.g "foo.js" or ["foo.js", "bar.js"])
* css (e.g "eggs.css" or ["eggs.css", "hola.css"])
* meta (e.g [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }])
* content (e.g "yo")
