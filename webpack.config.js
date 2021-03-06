// const server = require('./webpack/webpack.server.config.js');
// const client = require('./webpack/webpack.client.config.js');

// module.exports = {
//     // server, 
//     client
// }


var webpack = require('webpack');
var path = require('path');

var DIST_DIR   = path.resolve(__dirname, "dist"),  
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
    devtool: 'inline-source-map', //muestra la línea en el que haya un error
    context: CLIENT_DIR,

    entry: './js/index.js',

    output: {
        // path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js',
        path:     DIST_DIR,
        publicPath: '/',
    },
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