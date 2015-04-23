/**
 * Loader for the component’s  Dust templates, found in lib/
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var mainMenu = require('text!./main-menu.dust');

    dust.loadSource(dust.compileComponent(mainMenu, 'main-menu'));
});
