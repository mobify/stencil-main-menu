/**
 * Loader for the component’s  Dust templates, found in lib/
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var mainMenu = require('text!./main-menu.dust');
    var mainMenuLevel = require('text!./main-menu__level.dust');
    var mainMenuItem = require('text!./main-menu__item.dust');

    dust.loadSource(dust.compileComponent(mainMenu, 'main-menu'));
    dust.loadSource(dust.compileComponent(mainMenuLevel, 'main-menu__level'));
    dust.loadSource(dust.compileComponent(mainMenuItem, 'main-menu__item'));
});
