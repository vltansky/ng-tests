// const fs = require("fs-extra");
const AngularNamedLazyChunksWebpackPlugin = require('angular-named-lazy-chunks-webpack-plugin');
const webpack = require("webpack");
const path = require("path");
module.exports = (config, options) => {
  config.output.filename = '[name].vlad.js';
    config.optimization.splitChunks.automaticNameMaxLength = 30;
    // console.log(config);
    // process.exit(0);
    return config;
  };

// module.exports = {
//     output:{
//         filename: '[name].vlad.js',
//     },
//     optimization: {
//       splitChunks: {
//         automaticNameMaxLength: 10
//       }
//     }
// }