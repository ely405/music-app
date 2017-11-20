var path = require('path');

var DIST_DIR   = path.resolve(__dirname, "dist")

module.exports = {
    devtool: 'inline-source-map', //muestra la línea en el quehaya un error
    context: path.resolve(__dirname, 'src'),

    entry: [
        path.resolve(__dirname, '../src/server.js')
    ],

    output: {
        // path: path.resolve(__dirname, 'src'),
        filename: 'server.js',
        path:     DIST_DIR,
        publicPath: '/',
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