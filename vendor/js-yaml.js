(function() {
  /* globals define, js-yaml */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('js-yaml', { 'default': JsYaml });
})();