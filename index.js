var indexhtml = require("indexhtml");
var fs = require("fs");

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
