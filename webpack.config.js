/*jshint strict:false*/
/*jshint node: true*/

module.exports = {
    context: __dirname + '/demo/js',
    entry: './app',
    devtools: 'source-map',
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
            'htmlbars-view': '../../src/HTMLBarsView.js'
        }
    }
};