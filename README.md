# Stencil Main Menu

A main menu

**[Demo](href/to/living/example)**


## Installation

Install Stencil Main Menu using the AdaptiveJS generator:

```shell
yo adaptivejs:component --install stencil-main-menu
```

You can also install interactively by running `yo adaptivejs:component` and choosing the install option.


## Usage

Stencil components installed with the AdaptiveJS generator require no setup. Just load the component’s template in the desired view and use the dust helper to render it. For details, see [using Components in AdaptiveJS](#).

### Examples

```dust
{@c-main-menu class="" /}
```

```dust
{@c-main-menu class=""}
    <em>example body content</em>
{/c-main-menu}
```


## API

### Template

TODO: Should this section explain params vs bodies? What should it explain/differentiate? Should it list these here, or merely link to the schema file? If listing here, the format could look like:

- class {String} Additional values for the component’s `class` attribute

### UI script

TODO: TBD


## Contributing

So, you’d like to improve the Stencil Main Menu component: awesome! Remember:

- Keep it simple. Components should represent one thing in a straightforward way.
- Keep it real. Ensure there’s a strong use case the for each feature.
- Keep it consistent. Install [EditorConfig](http://editorconfig.org/) for your editor. This will help you follow our [styleguide](http://github.com/mobify/mobify-code-style).

Cool? Alright, let’s do this!

1. Clone (or fork) this repo.
1. Install dependencies: `npm install && bower install && bundle install`.
1. Create your feature branch: `git checkout -b my-new-feature`.
1. Run `grunt serve` and use the component’s visual tests as a preview while you develop (see below).
1. Commit your changes: `git add -a && git commit -m 'Add my feature.'`.
1. Push to the branch: `git push -u origin my-new-feature`.
1. Submit a pull request :D

### Unit Tests

Each component has a set of unit tests (TBD).

### Visual Tests

Each component has a set of visual tests. These are implemented as an html page that is used to manually verify functionality against a spec (how it should look and behave). This is mainly useful for testing CSS and for development.

- Run `npm install && bower install && bundle install`
- Run `grunt serve` and note the port number. It defaults to `3000` but will use the next available port if another server is already running.
- Navigate to [localhost:{port}/tests/visual](http://localhost:3000/tests/visual)


## License

MIT License. Stencil Main Menu is Copyright © 2014 Mobify. It is free software and may be redistributed under the terms specified in the LICENSE file.
