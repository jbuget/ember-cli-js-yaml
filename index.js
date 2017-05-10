/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-js-yaml',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/js-yaml/dist/js-yaml.js');
    app.import('vendor/js-yaml.js', {
      exports: {
        JsYaml: ['default']
      }
    });
  }

};
