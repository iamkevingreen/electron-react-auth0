var config = require('./webpack.config.js');
config.entry.app.shift();
config.plugins.shift();
config.output.publicPath = './build/';
module.exports = config;
