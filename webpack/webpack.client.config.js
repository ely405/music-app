var webpack = require('webpack');
var path = require('path');

var DIST_DIR   = path.resolve(__dirname, "dist"),  
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
    devtool: 'inline-source-map', //muestra la línea en el quehaya un error
    context: CLIENT_DIR,

    entry: './src/index.js',

    output: {
        // path: path.resolve(__dirname, 'src'),
        // filename: 'bundle.js',
        // path:     DIST_DIR,
        // publicPath: '/',
        filename: 'server.js',
        path: path.resolve(__dirname, '/build/server')
    },
    // devtool: "source-map",
    module: {
      loaders: [
        {
            test: /\.json$/,
            loader: 'json'
        },
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            query: {
                presets:
                    ['es2015', 'react']
            }
        }
      ]
    }
};