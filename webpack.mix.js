let mix = require('laravel-mix');
mix.setPublicPath('web');

// JavaScript
mix.js('web/js/app.js', 'web')

// Styles
mix.sass('web/styles/variables.scss', 'web') // creates 'dist/app.css'
    .sass('web/styles/styles.scss', 'web')

// React
mix.js('web/js/react.js', 'web')
   .react();