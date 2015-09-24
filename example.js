var build = require('bud');
var indexhtml = require('./');

build("example.html", indexhtml({ title: "yolo", js: './dist.js', css: './style.css', content: "yo", dest: 'example.html' }));
