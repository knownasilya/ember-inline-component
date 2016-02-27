var isPackageMissing = require('ember-cli-is-package-missing');

module.exports = {
  description: '',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    if (isPackageMissing(this, 'ember-cli-htmlbars-inline-precompile')) {
      return this.addAddonToProject({ name: 'ember-cli-htmlbars-inline-precompile', target: '0.3.1' });
    }
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
