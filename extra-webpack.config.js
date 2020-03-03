// const fs = require("fs-extra");

module.exports = (config, options) => {
    console.log(config, options);
    process.exit(0);
    config.output.filename = '[name].vlad.js';
    config.optimization.splitChunks.automaticNameMaxLength = 30;
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