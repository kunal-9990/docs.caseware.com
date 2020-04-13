const mix = require('laravel-mix');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

const BROWSERSYNC_URL = 'http://dev.docsmk4';

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
            files: './resources/assets/sass/*.scss',
        }),
        new CopyWebpackPlugin([{
            from: 'resources/assets/images',
            to: 'img', // Laravel mix will place this in 'public/img'
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 80,
                }),
            ],
        }),
    ],
});

mix
    .react('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/app_search.scss', 'public/css')
    .browserSync(BROWSERSYNC_URL);

if (mix.inProduction()) {
    mix.version();
}
