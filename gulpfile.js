// require's
const elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

// set paths
elixir.config.assetsPath = 'assets';
elixir.config.publicPath = 'assets/compiled';

elixir(function(mix){
    // *assestspath*/sass/
    mix.sass([
        'custom.scss',
        '/fontawesome-scss/main_fontawesome.scss',
        'custom.scss'
    ]);

    // js scripts
    mix.scripts([
        'jquery.js',
        'bootstrap.min.js'
    ]);

    // only watch the app.css and all pages
    mix.livereload([
        'assets/compiled/css/app.css',
        '**/*.htm'
    ]);
})

