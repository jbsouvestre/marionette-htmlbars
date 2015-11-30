/*jshint strict:false*/
/*jshint node: true*/
var package = require('./package.json');

module.exports = {
    context: __dirname + '/demo/js',
    entry: './app',
    devtool: 'source-map',
    output: {
        path: __dirname + '/demo',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        alias: {
            'marionette-htmlbars': package.main
        },
        root: __dirname
    }
};