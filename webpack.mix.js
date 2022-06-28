let mix = require('laravel-mix');
mix.setPublicPath('web');

// JavaScript
mix.js('web/js/index.js', 'web').react();

// Styles
mix
  .sass('web/styles/styles.scss', 'web');

