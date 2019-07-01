const keys = require('./keys');

module.exports = {
  WMATA: {
    api: 'http://api.wmata.com',
    api_key: keys.WMATA.api_key
  },
  homeURL:
    process.env.NODE_ENV === 'production'
      ? process.env.homeURL
      : 'http://127.0.0.1:3000'
};
