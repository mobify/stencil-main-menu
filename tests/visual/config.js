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
        'bellows': '../../bower_components/bellows/dist/bellows'
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
