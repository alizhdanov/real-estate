require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'serverless',
  webpack: (config, options) => {
    config.plugins = config.plugins || [];

    if (options.DEV) {
      // Read the .env file
      config.plugins.push(
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        })
      );
    }

    return config;
  },
};
