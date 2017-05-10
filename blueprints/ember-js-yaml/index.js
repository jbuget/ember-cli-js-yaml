/* eslint-env node */
module.exports = {
  description: 'Ember component to load yaml based on js-yaml node module.',

  afterInstall: function (options) {
    return this.addBowerPackageToProject('js-yaml');
  }
};
