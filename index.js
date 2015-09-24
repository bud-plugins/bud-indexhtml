var indexhtml = require("indexhtml");
var fs = require("fs");

plugin.build = true;
plugin.title = 'index.html';
plugin.params = [
  { key: 'dest', name: 'Destination file' },
  'Title',
  { name: 'JS', desc: 'List of JS files separated with comma', list: true },
  { name: 'CSS', desc: 'List of CSS files separated with comma', list: true },
  { name: 'Content', desc: 'Can be blank' }
];

module.exports = plugin;

function plugin (options) {
  return function (b) {
    var doc = indexhtml({
      title: options.title,
      js: options.js,
      css: options.css,
      meta: options.meta || [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      content: options.content || ''
    });

    fs.writeFile(options.dest, doc, b.done);
  };
}
