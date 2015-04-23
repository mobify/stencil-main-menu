require.config({
    packages: [
        {
            name: 'dustjs-component',
            main: 'index'
        },
    ],
    paths: {
        '$': '../../bower_components/jquery/dist/jquery',
        'text': '../../bower_components/text/text',
        'dust-core': '../../bower_components/dustjs-linkedin/dist/dust-core',
        'dust-full': '../../bower_components/dustjs-linkedin/dist/dust-full',
        'dustjs-component': '../../bower_components/dustjs-component',
        'stencil-spec': '../../bower_components/stencil-spec',
        'plugin': '../../bower_components/plugin/dist/plugin',
        'velocity': '../../bower_components/mobify-velocity/velocity',
        'bellows': '../../bower_components/bellows/dist/bellows',
        'pinny': '../../bower_components/pinny/dist/pinny',
        'event-polyfill': '../../bower_components/pinny/dist/utils/event-polyfil',
        'isChildOf': '../../bower_components/selector-utils/src/selector/isChildOf',
        'sheet-left': '../../bower_components/pinny/dist/effect/sheet-left',
        'shade': '../../bower_components/shade/dist/shade.min',
        'lockup': '../../bower_components/lockup/dist/lockup.min',
        'deckard': '../../bower_components/deckard/dist/deckard.min',
        'bouncefix': '../../bower_components/bouncefix.js/dist/bouncefix.min'
    },
    shim: {
        'dust-core': {
            'exports': 'dust'
        },
        'dust-full': {
            'exports': 'dust'
        },
        '$': {
            exports: '$'
        }
    },
});
