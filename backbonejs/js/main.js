// console.log('main logic is ready...');

var baseUrl,
    appid = 'b2a78096a95ed4ca9074738174e5fc75';

if (window.location.hostname == 'localhost' || window.location.hostname == '192.168.1.100') {
    baseUrl = '/~ash/forecast/backbonejs/js';
} else {
    baseUrl = '/forecast/backbonejs/js';
}

/*global requirejs */
requirejs.config({
    baseUrl: baseUrl,
    paths: {
        'backbone': 'lib/backbone',
        'backbone-layoutmanager': 'lib/backbone.layoutmanager',
        // 'backbone-queryparams': 'lib/backbone.queryparams',
        // 'backbone-route-filter': 'lib/backbone-route-filter',
        'text': 'lib/text',
        'cocktail': 'lib/cocktail',
        'handlebars': 'lib/handlebars-v3.0.3',
        'underscore': 'lib/underscore',

        'jquery': 'lib/jquery',
        'templates': '../templates'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone-layoutmanager': {
            deps: ['backbone']
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: 'jQuery'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

// bootstrap
requirejs(['backbone', 'views/app', 'routers/default'], function() {
    // check out router and app view for actual initialization, chief.
});