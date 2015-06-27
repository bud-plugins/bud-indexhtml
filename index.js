var indexhtml = require("indexhtml");
var fs = require("fs");

plugin.build = true;
plugin.title = 'index.html';
plugin.params = [
  'Destination file',
  'Title',
  { name: 'JS', desc: 'List of JS files separated with comma' },
  { name: 'CSS', desc: 'List of CSS files separated with comma' },
  { name: 'Content', desc: 'Can be blank' }
];

module.exports = plugin;

function plugin (dest, title, js, css, content) {
  return function (b) {
    var doc = indexhtml({
      title: title,
      js: js.trim().split(/,\s*/),
      css: css.trim().split(/,\s*/),
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      content: content
    });

    fs.writeFile(dest, doc, b.done);
  };
}
