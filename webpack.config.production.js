// webpack.config.production.js
var path = require('path');
var webpack = require('webpack');
var config = {
    context: __dirname + '/src',
    entry: {
      app: ['./app.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: './build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};

module.exports = config;
