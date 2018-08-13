# ember-inline-component

Blueprint Addon for Ember Components that have inline templates.

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]
![Ember Version][ember-version]

Uses the wonderful [ember-cli-htmlbars-inline-precompile] addon behind the scenes.

## Install

```shell
ember install ember-inline-component
```

## Usage

```shell
ember g inline-component my-component
ember g inline-component --pod another-one
```

This creates a component file that looks like:

```js
import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`{{yield}}`
});
```

So you can build components with the template inside the source itself, skipping the `template.hbs` file.
Great for prototyping, and fast development. Can always be moved to a separate template file if your template gets big.

*Also works when generating inside an addon.*

## Linting

Note that the excellent [ember-template-lint](https://github.com/rwjblue/ember-template-lint)
project is extremely helpful for finding lint errors in handlebars files, but will
not examine template literals natively in `.js` files. However, it is possible to use
`eslint` along with [this eslint plugin](https://github.com/psbanka/eslint-plugin-hbs)
to provide linting for your handlebars template literals within your `.js` files.

## Contributing

If you see any issues, please submit an Issue, or a Pull Request if you can.

See [CONTRIBUTING.md].


## License

This project is licensed under the [MIT License](LICENSE.md).


[ember-cli-htmlbars-inline-precompile]: https://github.com/pangratz/ember-cli-htmlbars-inline-precompile
[CONTRIBUTING.md]: CONTRIBUTING.md
[npm-badge-img]: https://badge.fury.io/js/ember-inline-component.svg
[npm-badge-link]: http://badge.fury.io/js/ember-inline-component
[travis-badge]: https://travis-ci.org/knownasilya/ember-inline-component.svg
[travis-badge-url]: https://travis-ci.org/knownasilya/ember-inline-component
[ember-observer-badge]: http://emberobserver.com/badges/ember-inline-component.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-inline-component
[ember-version]: https://embadge.io/v1/badge.svg?start=1.13.0

