var config = require('./webpack.config.js');
config.plugins.shift();
config.output.publicPath = './dist/';
module.exports = config;
