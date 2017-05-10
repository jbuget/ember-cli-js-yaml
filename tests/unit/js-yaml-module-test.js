import { module, test } from 'qunit';
import yaml from 'js-yaml';

module('js-yaml as an ES6 module');

test('it works', function(assert) {
  assert.ok(yaml);
});