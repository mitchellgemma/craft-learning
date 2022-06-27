let mix = require('laravel-mix');

// JavaScript
mix.js('web/js/app.js', 'web')

// Styles
mix.sass('web/styles/variables.scss', 'web') // creates 'dist/app.css'
    .sass('web/styles/styles.scss', 'web')
