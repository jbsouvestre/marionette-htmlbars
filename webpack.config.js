/*jshint strict:false*/
/*jshint node: true*/

module.exports = {
    entry: './app',
    devtools: 'source-map',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json/
        }]
    },
    resolve: {
        alias: {
            //htmlbars: './htmlbars/packages/htmlbars/lib/main.js'
        }
    }
};