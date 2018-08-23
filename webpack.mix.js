const mix = require('laravel-mix');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const BROWSERSYNC_URL = '127.0.0.1:8000';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({
      files: './resources/assets/sass/**/*.scss',
    }),
  ],
});

mix
  .react('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .browserSync(BROWSERSYNC_URL);
