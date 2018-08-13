var path = require('path');
var validComponentName = require('ember-cli-valid-component-name');
var getPathOption = require('ember-cli-get-component-path-option');
var normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a component with an inline hbs template. Name must contain a hyphen.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: 'components',
      aliases:[
        {'no-path': ''}
      ]
    }
  ],

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        if (options.pod) {
          return path.join(options.podPath, options.locals.path, options.dasherizedModuleName);
        }
        return 'components';
      },
      __name__: function(options) {
        if (options.pod) {
          return 'component';
        }

        return options.dasherizedModuleName;
      }
    };
  },

  normalizeEntityName: function(entityName) {
    entityName = normalizeEntityName(entityName);

    return validComponentName(entityName);
  },

  locals: function(options) {
    var contents = '\n  layout: hbs`{{yield}}`';

    return {
      contents: contents,
      path: getPathOption(options)
    };
  }
};
